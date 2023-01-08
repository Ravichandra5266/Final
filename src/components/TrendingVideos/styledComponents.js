import styled from 'styled-components'

export const TrendingVideoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px #cccccc;
  @media screen and (min-width: 768px) {
    width: 46%;
    min-height: 400px;
    @media screen and (min-width: 1200px) {
      width: 30%;
    }
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
`

export const Logo = styled.img`
  width: 50px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Title = styled.h1`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
  margin: 0px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`
export const SubTitle = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  margin: 0px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ViewCount = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 500;
  font-family: roboto;
  margin: 0px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`
export const Posted = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 500;
  font-family: roboto;
  margin: 0px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
`
