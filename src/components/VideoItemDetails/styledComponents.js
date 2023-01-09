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
export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
`
export const FlexContainerViewPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`
export const VideoViews = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
`
export const VideoPost = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
`
export const VideoLikeDislikeSaveControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LikeText = styled.p`
  color: ${props => props.likeText};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  margin-left: 10px;
`
export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.likeText};
`
export const DislikeText = styled.p`
  color: ${props => props.disLikeText};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  margin-left: 10px;
`
export const DislikeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.disLikeText};
`

export const SaveText = styled.p`
  color: ${props => props.saveText};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  margin-left: 10px;
`
export const SaveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.saveText};
`

export const LikeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const DislikeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.disLikeText};
`

export const SaveContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.saveText};
`

export const ControlContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const BottomVideoContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
`
export const BottomLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
export const BottomContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BottomTitle = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 18px;
  font-weight: bold;
  font-family: roboto;
  margin: 0px;
`
export const BottomSubscriber = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 500;
  font-family: roboto;
`
export const BottomDescription = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 800;
  font-family: roboto;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
  min-height: 100vh;
  width: 100%;
`
export const FailureImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const FailureTitle = styled.h1`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 25px;
  font-weight: bold;
  font-family: roboto;
`
export const FailureDescription = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 800;
  font-family: roboto;
`
export const FailureRetryBtn = styled.button`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 18px;
  font-weight: bold;
  font-family: roboto;
  height: 40px;
  width: 100px;
  border: 1px solid transparent;
  background-color: #4f46e5;
  border-radius: 8px;
  cursor: pointer;
`
