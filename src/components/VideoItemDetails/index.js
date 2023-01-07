import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'

import {GiSave} from 'react-icons/gi'

import ContextMessage from '../../context/ContextMessage'

import {
  Container,
  VideoItemContainer,
  VideoContentContainer,
  SpinnerContainer,
  FlexContainer1,
  VideoCount,
  VideoTitle,
  VideoPublished,
  FlexConatainer2,
} from './styledComponents'

import Header from '../Header'

import Sidebar from '../Sidebar'

const ApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    urlStatus: ApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getVideoItemDetailsApiUrl()
  }

  getVideoItemDetailsApiUrl = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})

    const {match} = this.props

    const {params} = match

    const {id} = params

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`

    const token = Cookies.get('jwtToken')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const responseUrl = await fetch(videoItemDetailsApiUrl, options)

    // console.log(responseUrl)

    if (responseUrl.ok === true) {
      const responseData = await responseUrl.json()

      //   console.log(responseData)

      const data = responseData.video_details

      const updatedData = {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
        id: data.id,
        title: data.title,
        description: data.description,
        viewCount: data.view_count,
        publishedAt: data.published_at,
        videoUrl: data.video_url,
        thumbanailUrl: data.thumbanail_url,
      }

      this.setState({
        urlStatus: ApiStatusConstant.success,
        videoDetails: updatedData,
      })
    }
  }

  renderSpinnerView = () => (
    <SpinnerContainer>
      <Loader type="ThreeDots" height="50" width="50" color="blue" />
    </SpinnerContainer>
  )

  renderSuccessView = () => {
    const {videoDetails} = this.state
    const posted = formatDistanceToNow(new Date(videoDetails.publishedAt))
    return (
      <ContextMessage.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <VideoContentContainer isDarkMode={isDarkMode}>
              <ReactPlayer
                url={videoDetails.videoUrl}
                width="100%"
                height="300px"
                controls="true"
                style={{padding: '10px'}}
              />
              <VideoTitle isDarkMode={isDarkMode}>
                {videoDetails.title}
              </VideoTitle>
              <FlexContainer1>
                <FlexConatainer2>
                  <VideoCount
                    isDarkMode={isDarkMode}
                  >{`${videoDetails.viewCount} views`}</VideoCount>
                  <VideoPublished isDarkMode={isDarkMode}>
                    {posted}
                  </VideoPublished>
                </FlexConatainer2>
              </FlexContainer1>
            </VideoContentContainer>
          )
        }}
      </ContextMessage.Consumer>
    )
  }

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
            <Container isDarkMode={isDarkMode}>
              <Header />
              <VideoItemContainer>
                <Sidebar />
                {this.renderSwitchCondition()}
              </VideoItemContainer>
            </Container>
          )
        }}
      </ContextMessage.Consumer>
    )
  }
}

export default VideoItemDetails
