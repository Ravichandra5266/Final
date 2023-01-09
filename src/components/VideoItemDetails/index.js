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
  FlexContainerViewPost,
  VideoTitle,
  VideoViews,
  VideoPost,
  VideoLikeDislikeSaveControls,
  SaveContainer,
  ControlContentContainer,
  SaveButton,
  DislikeText,
  DislikeButton,
  LikeButton,
  LikeText,
  SaveText,
  LikeContainer,
  DislikeContainer,
  BottomVideoContentContainer,
  BottomLogo,
  BottomContentContainer,
  BottomTitle,
  BottomSubscriber,
  BottomDescription,
  FailureDescription,
  FailureImg,
  FailureRetryBtn,
  FailureViewContainer,
  FailureTitle,
} from './styledComponents'

import Header from '../Header'

import Sidebar from '../Sidebar'

import './index.css'

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
    isLike: false,
    isDislike: false,
    isSave: false,
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
        thumbnailUrl: data.thumbnail_url,
      }

      this.setState({
        urlStatus: ApiStatusConstant.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({urlStatus: ApiStatusConstant.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoItemDetailsApiUrl()
  }

  renderFailureView = () => (
    <ContextMessage.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureViewContainer isDarkMode={isDarkMode}>
            {isDarkMode ? (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}
            <FailureTitle isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailureTitle>
            <FailureDescription isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again.
              <br />
              Please try agin
            </FailureDescription>
            <FailureRetryBtn
              isDarkMode={isDarkMode}
              type="button"
              onClick={this.onClickRetry}
            >
              Retry
            </FailureRetryBtn>
          </FailureViewContainer>
        )
      }}
    </ContextMessage.Consumer>
  )

  renderSpinnerView = () => (
    <SpinnerContainer data-testid="loader">
      <Loader type="ThreeDots" height="50" width="50" color="blue" />
    </SpinnerContainer>
  )

  onClickLike = () => {
    const {isLike} = this.state
    this.setState({isLike: !isLike})
  }

  onClickDislike = () => {
    const {isDislike} = this.state
    this.setState({isDislike: !isDislike})
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state
    const posted = formatDistanceToNow(new Date(videoDetails.publishedAt))
    return (
      <ContextMessage.Consumer>
        {value => {
          const {isDarkMode, onSaveVideo, onRemoveVideo} = value
          const {isSave, isLike, isDislike} = this.state
          const textColor = isDarkMode ? '#64748b' : '#64748b'
          const saveText = isSave ? ' #2563eb' : `${textColor}`
          const likeText = isLike ? ' #2563eb' : `${textColor}`
          const disLikeText = isDislike ? '#2563eb' : `${textColor}`

          this.onClickSave = () => {
            this.setState({isSave: !isSave})
            onSaveVideo({...videoDetails})
          }

          return (
            <VideoContentContainer isDarkMode={isDarkMode}>
              <ReactPlayer
                url={videoDetails.videoUrl}
                width="100%"
                height="300px"
                controls
                style={{padding: '10px'}}
              />
              <VideoTitle isDarkMode={isDarkMode}>
                {videoDetails.title}
              </VideoTitle>
              <ControlContentContainer>
                <FlexContainerViewPost>
                  <VideoViews isDarkMode={isDarkMode}>
                    {`${videoDetails.viewCount} views`}
                  </VideoViews>
                  <VideoPost isDarkMode={isDarkMode}>{posted}</VideoPost>
                </FlexContainerViewPost>
                <VideoLikeDislikeSaveControls>
                  <LikeButton
                    type="button"
                    onClick={this.onClickLike}
                    likeText={likeText}
                  >
                    <LikeContainer>
                      <BiLike className="control-icons" />
                      <LikeText>Like</LikeText>
                    </LikeContainer>
                  </LikeButton>

                  <DislikeButton
                    type="button"
                    onClick={this.onClickDislike}
                    disLikeText={disLikeText}
                  >
                    <DislikeContainer>
                      <BiDislike className="control-icons" />
                      <DislikeText>Dislike</DislikeText>
                    </DislikeContainer>
                  </DislikeButton>

                  <SaveButton
                    type="button"
                    onClick={this.onClickSave}
                    saveText={saveText}
                  >
                    <SaveContainer>
                      <GiSave className="control-icons" />
                      <SaveText>Save</SaveText>
                    </SaveContainer>
                  </SaveButton>
                </VideoLikeDislikeSaveControls>
              </ControlContentContainer>
              <hr className="hr-line" />
              <BottomVideoContentContainer>
                <BottomLogo
                  src={videoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <BottomContentContainer>
                  <BottomTitle isDarkMode={isDarkMode}>
                    {videoDetails.name}
                  </BottomTitle>
                  <BottomSubscriber isDarkMode={isDarkMode}>
                    {`${videoDetails.subscriberCount} subscribers`}
                  </BottomSubscriber>
                  <BottomDescription isDarkMode={isDarkMode}>
                    {videoDetails.description}
                  </BottomDescription>
                </BottomContentContainer>
              </BottomVideoContentContainer>
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
            <Container data-testid="videoItemDetails" isDarkMode={isDarkMode}>
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
