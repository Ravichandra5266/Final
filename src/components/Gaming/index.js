import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import {Link} from 'react-router-dom'

import ContextMessage from '../../context/ContextMessage'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {
  Container,
  SpinnerContainer,
  GamingHeading,
  GamingVideosListContainer,
  Heading,
  GamingContainer,
  GameItemContainer,
  GameImg,
  GameTitle,
  GameSubTitle,
} from './styledComponents'

import './index.css'

const ApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {
    urlStatus: ApiStatusConstant.initial,
    gamingDetailsData: [],
  }

  componentDidMount() {
    this.getGamingVideosApiUrl()
  }

  getGamingVideosApiUrl = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})

    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'

    const token = Cookies.get('jwtToken')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const responseUrl = await fetch(gamingVideosApiUrl, options)

    // console.log(responseUrl)

    if (responseUrl.ok === true) {
      const responseData = await responseUrl.json()

      //   console.log(responseData)

      const data = responseData.videos

      //   console.log(data)

      const updatedData = data.map(each => ({
        id: each.id,
        title: each.title,
        viewCount: each.view_count,
        thumbnailUrl: each.thumbnail_url,
      }))
      //   console.log(updatedData)

      this.setState({
        urlStatus: ApiStatusConstant.success,
        gamingDetailsData: updatedData,
      })
    }
  }

  renderSpinnerView = () => (
    <SpinnerContainer>
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </SpinnerContainer>
  )

  renderSuccessView = () => (
    <ContextMessage.Consumer>
      {value => {
        const {isDarkMode} = value
        const {gamingDetailsData} = this.state

        return (
          <>
            <GamingHeading>
              <SiYoutubegaming color="red" className="icons" />
              <Heading isDarkMode={isDarkMode}>Gaming</Heading>
            </GamingHeading>
            <GamingVideosListContainer>
              {gamingDetailsData.map(eachVideo => (
                <GameItemContainer>
                  <Link to={`/videos/${eachVideo.id}`} className="route-link">
                    <GameImg
                      src={eachVideo.thumbnailUrl}
                      alt={eachVideo.title}
                    />
                    <GameTitle isDarkMode={isDarkMode}>
                      {eachVideo.title}
                    </GameTitle>
                    <GameSubTitle isDarkMode={isDarkMode}>
                      {`${eachVideo.viewCount} Watching Worldwide`}
                    </GameSubTitle>
                  </Link>
                </GameItemContainer>
              ))}
            </GamingVideosListContainer>
          </>
        )
      }}
    </ContextMessage.Consumer>
  )

  renderSwitchCondition = () => {
    const {urlStatus} = this.state

    let result = null

    switch (urlStatus) {
      case ApiStatusConstant.success:
        result = this.renderSuccessView()
        break
      case ApiStatusConstant.failure:
        result = this.renderFailureView()
        break

      case ApiStatusConstant.inProgress:
        result = this.renderSpinnerView()
        break
      default:
        result = ''
        break
    }
    return result
  }

  render() {
    return (
      <ContextMessage.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header />
              <Container isDarkMode={isDarkMode}>
                <Sidebar />
                <GamingContainer isDarkMode={isDarkMode}>
                  {this.renderSwitchCondition()}
                </GamingContainer>
              </Container>
            </>
          )
        }}
      </ContextMessage.Consumer>
    )
  }
}
export default Gaming
