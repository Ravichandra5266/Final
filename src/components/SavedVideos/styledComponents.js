import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const SaveVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 10px;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : ' #f9f9f9')};
`
export const SavedVideoHeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`
export const Heading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: roboto;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const SavedVIdeoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  min-height: 500px;
  margin: 5px;
  box-shadow: 0px 0px 10px 0px #cccccc;
  @media screen and (min-width: 768px) {
    width: 48%;
    @media screen and (min-width: 992px) {
      width: 31%;
    }
  }
`
export const SavedVideoImage = styled.img`
  width: 100%;
  height: 250px;
`
export const SavedVideoTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
  margin-top: 5px;
  margin-bottom: 5px;

  text-align: center;
`

export const SavedVideoSubTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
  margin-top: 5px;
  margin-bottom: 5px;

  text-align: center;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const NoOfViews = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: auto;
`
export const VideoPosted = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;

  margin-right: auto;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : ' #f9f9f9')};
`
export const NoSavedVideoImg = styled.img`
  width: 200px;
`
export const NoSavedTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
`
export const NoSavedSubTitle = styled.h1`
  font-size: 18px;
  font-weight: 800;
  font-family: roboto;
`
