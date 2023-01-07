import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
`
export const NotFoundImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const Title = styled.h1`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
`
export const Description = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 800;
  font-family: roboto;
`
