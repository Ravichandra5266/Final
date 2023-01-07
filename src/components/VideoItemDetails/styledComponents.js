import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  //   background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
`
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`
export const VideoTitle = styled.h1`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
`
export const FlexContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FlexConatainer2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const VideoCount = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
`
export const VideoPublished = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  margin-left: 10px;
`
