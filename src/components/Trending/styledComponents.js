import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingVideosListContainer = styled.ul`
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
export const TrendingHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
`
export const Heading = styled.h1`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 25px;
  font-weight: bold;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
