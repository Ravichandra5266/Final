import {AiFillHome, AiFillFire, AiFillSave} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {Link} from 'react-router-dom'

import ContextMessage from '../../context/ContextMessage'

import {
  SidebarPageContainer,
  FlexContainer,
  SidebarMenuText,
  SidebarTopContainer,
  SidebarBottomContainer,
  SidebarBottomHeading,
  SidebarBottomImg,
  SidebarBottomDescription,
} from './styledComponents'

import './index.css'

const Sidebar = () => (
  <ContextMessage.Consumer>
    {value => {
      const {isDarkMode, activeTab, onChangeTab} = value

      const onClickHome = () => {
        onChangeTab('Home')
      }

      const onClickTrending = () => {
        onChangeTab('Trending')
      }

      const onClickGaming = () => {
        onChangeTab('Gaming')
      }

      const onClickSavedVideos = () => {
        onChangeTab('Saved Videos')
      }
      return (
        <SidebarPageContainer isDarkMode={isDarkMode}>
          <SidebarTopContainer>
            <Link
              to="/"
              className={isDarkMode ? 'white' : 'black'}
              onClick={onClickHome}
            >
              <FlexContainer activeTab={activeTab === 'Home'}>
                <AiFillHome
                  color={activeTab === 'Home' ? 'red' : ''}
                  fontSize="25px"
                />
                <SidebarMenuText isDarkMode={isDarkMode}>Home</SidebarMenuText>
              </FlexContainer>
            </Link>

            <Link
              to="/trending"
              className={isDarkMode ? 'white' : 'black'}
              onClick={onClickTrending}
            >
              <FlexContainer activeTab={activeTab === 'Trending'}>
                <AiFillFire
                  color={activeTab === 'Trending' ? 'red' : ''}
                  fontSize="25px"
                />
                <SidebarMenuText isDarkMode={isDarkMode}>
                  Trending
                </SidebarMenuText>
              </FlexContainer>
            </Link>

            <Link
              to="/gaming"
              className={isDarkMode ? 'white' : 'black'}
              onClick={onClickGaming}
            >
              <FlexContainer activeTab={activeTab === 'Gaming'}>
                <SiYoutubegaming
                  color={activeTab === 'Gaming' ? 'red' : ''}
                  fontSize="25px"
                />
                <SidebarMenuText isDarkMode={isDarkMode}>
                  Gaming
                </SidebarMenuText>
              </FlexContainer>
            </Link>

            <Link
              to="/saved-videos"
              className={isDarkMode ? 'white' : 'black'}
              onClick={onClickSavedVideos}
            >
              <FlexContainer activeTab={activeTab === 'Saved Videos'}>
                <AiFillSave
                  color={activeTab === 'Saved Videos' ? 'red' : ''}
                  fontSize="25px"
                />
                <SidebarMenuText isDarkMode={isDarkMode}>
                  Saved Videos
                </SidebarMenuText>
              </FlexContainer>
            </Link>
          </SidebarTopContainer>
          <SidebarBottomContainer>
            <SidebarBottomHeading isDarkMode={isDarkMode}>
              CONTACT US
            </SidebarBottomHeading>
            <FlexContainer>
              <SidebarBottomImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SidebarBottomImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SidebarBottomImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in"
              />
            </FlexContainer>
            <SidebarBottomDescription isDarkMode={isDarkMode}>
              Enjoy!Now to see your channels and recommendations!
            </SidebarBottomDescription>
          </SidebarBottomContainer>
        </SidebarPageContainer>
      )
    }}
  </ContextMessage.Consumer>
)

export default Sidebar
