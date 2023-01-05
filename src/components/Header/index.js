import {RiMoonClearFill} from 'react-icons/ri'

import {BsSun} from 'react-icons/bs'

import ContextMessage from '../../context/ContextMessage'

import {
  HeadPageContainer,
  HeadPageLogo,
  HeadPageListItemsContainer,
  HeadPageItem,
  ThemeBtn,
  ProfileImg,
} from './styledComponents'

const Header = () => (
  <ContextMessage.Consumer>
    {value => {
      const {isDarkMode, onChangeTheme} = value
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
              <ThemeBtn type="button">
                {isDarkMode ? (
                  <RiMoonClearFill className="dark-icon" />
                ) : (
                  <BsSun className="light-icon" />
                )}
              </ThemeBtn>
            </HeadPageItem>
            <HeadPageItem>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </HeadPageItem>
          </HeadPageListItemsContainer>
        </HeadPageContainer>
      )
    }}
  </ContextMessage.Consumer>
)

export default Header
