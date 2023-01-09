import styled from 'styled-components'

export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #7e858e;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px #7e858e;
  margin: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 45%;
    min-height: 450px;
    @media screen and (min-width: 992px) {
      width: 47%;
    }
    @media screen and (min-width: 1200px) {
      width: 31%;
    }
  }
`
export const VideoImg = styled.img`
  width: 100%;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
`
export const VideoContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const VideoLogo = styled.img`
  width: 100px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 80px;
  }
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 18px;
  font-weight: bold;
  font-family: roboto;
`
export const VideoSubTitle = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 800;
  font-family: roboto;
`
export const VideoCount = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 500;
  font-family: roboto;
`
export const VideoPublished = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 500;
  font-family: roboto;
  margin-left: 15px;
`
