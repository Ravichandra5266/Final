import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`

export const BannerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BannerSectionLogo = styled.img`
  width: 200px;
`
export const BannerDescription = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
`
export const BannerSectionBtn = styled.button`
  color: black;
  font-size: 18px;
  font-weight: bold;
  font-family: roboto;
  height: 40px;
  width: 120px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid;
  border-radius: 8px;
`
export const CloseIcon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: auto;
`
export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  border: 1px solid #616e7c;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 520px;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding-left: 5px;
  font-size: 15px;
  font-weight: bold;
  font-family: roboto;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
`
export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  border: 1px solid #616e7c;
  border-right: none;
`
export const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const VideosDetailsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  width: 100%;
  padding: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
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
export const EmptySearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`
export const EmptySearchImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const EmptySearchTitle = styled.h1`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 25px;
  font-weight: bold;
  font-family: roboto;
`
export const EmptySearchDescription = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 800;
  font-family: roboto;
`
export const EmptySearchRetryBtn = styled.button`
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
