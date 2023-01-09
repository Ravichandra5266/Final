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
  FailureImg,
  FailureViewContainer,
  Description,
  RetryBtn,
} from './styledComponents'

import './index.css'
import {Title} from '../TrendingVideos/styledComponents'

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
    } else {
      this.setState({urlStatus: ApiStatusConstant.failure})
    }
  }

  onClickRetryPage = () => {
    this.getTrendingVideosApiUrl()
  }

  renderFailureView = () => (
    <ContextMessage.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureViewContainer isDarkMode={isDarkMode}>
            {isDarkMode ? (
              <FailureImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
            ) : (
              <FailureImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
            )}
            <Title>Oops! Something Went Wrong</Title>
            <Description>We are having some trouble</Description>
            <RetryBtn onClick={this.onClickRetryPage}>Retry</RetryBtn>
          </FailureViewContainer>
        )
      }}
    </ContextMessage.Consumer>
  )

  renderSpinnerView = () => (
    <SpinnerContainer data-testid="loader">
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
              <Container data-testid="trending" isDarkMode={isDarkMode}>
                <Sidebar />
                <TrendingContainer
                  data-testid="trending"
                  isDarkMode={isDarkMode}
                >
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
