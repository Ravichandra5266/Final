import {RiMoonClearFill} from 'react-icons/ri'

import {BsSun} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import ContextMessage from '../../context/ContextMessage'

import {
  HeadPageContainer,
  HeadPageLogo,
  HeadPageListItemsContainer,
  HeadPageItem,
  ThemeBtn,
  ProfileImg,
  LogoutBtn,
  PopupContainer,
  PopupDescription,
  FlexContainer,
  CloseBtn,
  ConfirmBtn,
} from './styledComponents'

import './index.css'

const Header = props => (
  <ContextMessage.Consumer>
    {value => {
      const {isDarkMode, onChangeTheme} = value
      const ThemeIconsColor = isDarkMode
        ? 'light-theme-icon'
        : 'dark-theme-icon'

      const onClickChangeTheme = () => {
        onChangeTheme()
      }

      const onClickLogout = () => {
        Cookies.remove('jwtToken')

        const {history} = props

        history.replace('/login')
      }

      return (
        <HeadPageContainer isDarkMode={isDarkMode}>
          {isDarkMode ? (
            <HeadPageLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <HeadPageLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          )}
          <HeadPageListItemsContainer>
            <HeadPageItem>
              <ThemeBtn type="button" onClick={onClickChangeTheme}>
                {isDarkMode ? (
                  <BsSun className={ThemeIconsColor} />
                ) : (
                  <RiMoonClearFill className={ThemeIconsColor} />
                )}
              </ThemeBtn>
            </HeadPageItem>
            <HeadPageItem>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </HeadPageItem>
            <HeadPageItem>
              <Popup
                modal
                trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
              >
                {close => (
                  <PopupContainer isDarkMode={isDarkMode}>
                    <PopupDescription isDarkMode={isDarkMode}>
                      Are you sure,you want to logout?
                    </PopupDescription>
                    <FlexContainer>
                      <CloseBtn
                        type="button"
                        isDarkMode={isDarkMode}
                        onClick={() => close()}
                      >
                        Close
                      </CloseBtn>
                      <ConfirmBtn
                        type="button"
                        isDarkMode={isDarkMode}
                        onClick={onClickLogout}
                      >
                        Conform
                      </ConfirmBtn>
                    </FlexContainer>
                  </PopupContainer>
                )}
              </Popup>
            </HeadPageItem>
          </HeadPageListItemsContainer>
        </HeadPageContainer>
      )
    }}
  </ContextMessage.Consumer>
)

export default withRouter(Header)
