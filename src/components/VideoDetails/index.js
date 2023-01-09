import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {
  VideoContainer,
  VideoImg,
  FlexContainer,
  VideoLogo,
  VideoContentText,
  VideoTitle,
  VideoSubTitle,
  VideoCount,
  VideoPublished,
} from './styledComponents'

import ContextMessage from '../../context/ContextMessage'

import './index.css'

const VideoDetails = props => {
  const {eachVideo} = props
  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
    id,
  } = eachVideo
  const publishedTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <ContextMessage.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <VideoContainer isDarkMode={isDarkMode}>
            <Link to={`/videos/${id}`} className="video-route-link">
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <FlexContainer>
                <VideoLogo src={profileImageUrl} alt="channel logo" />
                <VideoContentText>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <VideoSubTitle isDarkMode={isDarkMode}>{name}</VideoSubTitle>
                  <FlexContainer>
                    <VideoCount
                      isDarkMode={isDarkMode}
                    >{`${viewCount} views`}</VideoCount>
                    <VideoPublished isDarkMode={isDarkMode}>
                      {publishedTime}
                    </VideoPublished>
                  </FlexContainer>
                </VideoContentText>
              </FlexContainer>
            </Link>
          </VideoContainer>
        )
      }}
    </ContextMessage.Consumer>
  )
}

export default VideoDetails
