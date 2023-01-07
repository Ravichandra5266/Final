import ContextMessage from '../../context/ContextMessage'

import Header from '../Header'

import {
  NotFoundPageContainer,
  NotFoundImg,
  Title,
  Description,
  Container,
} from './styledComponents'

import './index.css'

const NotFound = () => (
  <ContextMessage.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <Container>
          <Header />

          <NotFoundPageContainer isDarkMode={isDarkMode}>
            {isDarkMode ? (
              <NotFoundImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                alt="not found"
              />
            ) : (
              <NotFoundImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
            )}
            <Title isDarkMode={isDarkMode}>Page Not Found</Title>
            <Description isDarkMode={isDarkMode}>
              We are sorry,the page you requested could not be found.
            </Description>
          </NotFoundPageContainer>
        </Container>
      )
    }}
  </ContextMessage.Consumer>
)

export default NotFound
