import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiTwotoneFire} from 'react-icons/ai'

import ContextMessage from '../../context/ContextMessage'

import Header from '../Header'

import Sidebar from '../Sidebar'

import TrendingVideos from '../TrendingVideos'

import {
  Container,
  TrendingContainer,
  SpinnerContainer,
  TrendingVideosListContainer,
  TrendingHeading,
  Heading,
} from './styledComponents'

import './index.css'

const ApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    urlStatus: ApiStatusConstant.initial,
    trendingVideoData: [],
  }

  componentDidMount() {
    this.getTrendingVideosApiUrl()
  }

  getTrendingVideosApiUrl = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})

    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'

    const token = Cookies.get('jwtToken')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const responseUrl = await fetch(trendingVideosApiUrl, options)

    // console.log(responseUrl)

    if (responseUrl.ok === true) {
      const responseData = await responseUrl.json()

      //   console.log(responseData)

      const data = responseData.videos

      //   console.log(data)

      const updatedData = data.map(each => ({
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        title: each.title,
        viewCount: each.view_count,
        thumbnailUrl: each.thumbnail_url,
        publishedAt: each.published_at,
      }))
      //   console.log(updatedData)

      this.setState({
        urlStatus: ApiStatusConstant.success,
        trendingVideoData: updatedData,
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
        const {trendingVideoData} = this.state

        return (
          <>
            <TrendingHeading>
              <AiTwotoneFire color="red" className="icons" />
              <Heading isDarkMode={isDarkMode}>Trending</Heading>
            </TrendingHeading>
            <TrendingVideosListContainer>
              {trendingVideoData.map(eachVideo => (
                <TrendingVideos eachVideo={eachVideo} id={eachVideo.id} />
              ))}
            </TrendingVideosListContainer>
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
                <TrendingContainer isDarkMode={isDarkMode}>
                  {this.renderSwitchCondition()}
                </TrendingContainer>
              </Container>
            </>
          )
        }}
      </ContextMessage.Consumer>
    )
  }
}
export default Trending
