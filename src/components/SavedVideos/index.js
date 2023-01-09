import {AiTwotoneFire} from 'react-icons/ai'

import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import ContextMessage from '../../context/ContextMessage'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {
  Container,
  SaveVideosContainer,
  SavedVideoHeadingContainer,
  Heading,
  SavedVideoImage,
  SavedVideoSubTitle,
  SavedVideosListContainer,
  SavedVIdeoItemContainer,
  NoOfViews,
  VideoPosted,
  SavedVideoTitle,
  NoSavedVideosContainer,
  NoSavedVideoImg,
  NoSavedSubTitle,
} from './styledComponents'

import './index.css'
import {FlexContainer} from '../Header/styledComponents'

const SavedVideos = () => (
  <ContextMessage.Consumer>
    {value => {
      const {isDarkMode, savedVideos} = value
      const videosListLength = savedVideos.length
      const LinkColor = isDarkMode ? 'light' : 'black'
      return (
        <>
          <Header />
          <Container data-testid="savedVideos">
            <Sidebar />
            {videosListLength > 0 ? (
              <SaveVideosContainer data-testid="theme" isDarkMode={isDarkMode}>
                <SavedVideoHeadingContainer>
                  <AiTwotoneFire className="icons" />
                  <Heading>Saved Videos</Heading>
                </SavedVideoHeadingContainer>
                <SavedVideosListContainer>
                  {savedVideos.map(eachVideo => (
                    <SavedVIdeoItemContainer>
                      <Link to={`videos/${eachVideo.id}`} className={LinkColor}>
                        <SavedVideoImage
                          src={eachVideo.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <SavedVideoTitle>{eachVideo.title}</SavedVideoTitle>
                        <SavedVideoSubTitle>
                          {eachVideo.name}
                        </SavedVideoSubTitle>
                        <FlexContainer>
                          <NoOfViews>{`${eachVideo.viewCount} views`}</NoOfViews>
                          <VideoPosted>
                            {formatDistanceToNow(
                              new Date(eachVideo.publishedAt),
                            )}
                          </VideoPosted>
                        </FlexContainer>
                      </Link>
                    </SavedVIdeoItemContainer>
                  ))}
                </SavedVideosListContainer>
              </SaveVideosContainer>
            ) : (
              <NoSavedVideosContainer isDarkMode={isDarkMode}>
                <NoSavedVideoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedSubTitle>No Saved Videos Found</NoSavedSubTitle>
                <NoSavedSubTitle>
                  Save your videos by clicking a button
                </NoSavedSubTitle>
              </NoSavedVideosContainer>
            )}
          </Container>
        </>
      )
    }}
  </ContextMessage.Consumer>
)

export default SavedVideos
