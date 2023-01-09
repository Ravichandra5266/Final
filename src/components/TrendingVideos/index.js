import {Link} from 'react-router-dom'

import {
  TrendingVideoItem,
  ThumbnailImg,
  Title,
  Logo,
  Content,
  SubTitle,
  ViewCount,
  Posted,
} from './styledComponents'

import ContextMessage from '../../context/ContextMessage'
import {FlexContainer} from '../Header/styledComponents'

const TrendingVideos = props => {
  const {eachVideo} = props
  const {
    title,
    viewCount,
    publishedAt,
    thumbnailUrl,
    profileImageUrl,
    name,
    id,
  } = eachVideo
  //   console.log(eachVideo)
  return (
    <ContextMessage.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <TrendingVideoItem>
            <Link to={`/videos/${id}`} className="link-route">
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <FlexContainer>
                <Logo src={profileImageUrl} alt={name} />
                <Content>
                  <Title isDarkMode={isDarkMode}>{title}</Title>
                  <FlexContainer>
                    <SubTitle isDarkMode={isDarkMode}>{name}</SubTitle>
                    <ViewCount isDarkMode={isDarkMode}>{viewCount}</ViewCount>
                    <Posted isDarkMode={isDarkMode}>{publishedAt}</Posted>
                  </FlexContainer>
                </Content>
              </FlexContainer>
            </Link>
          </TrendingVideoItem>
        )
      }}
    </ContextMessage.Consumer>
  )
}

export default TrendingVideos
