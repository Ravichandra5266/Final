import styled from 'styled-components'

export const HeadPageContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  padding-left: 10px;
  padding-right: 20px;
`
export const HeadPageLogo = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const HeadPageListItemsContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  list-style-type: none;
`
export const HeadPageItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
`
export const ThemeBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  width: 25px;
`
export const LogoutBtn = styled.button`
  color: ${props => (props.isDarkMode ? 'white' : '#3b82f6')};
  font-size: 12px;
  font-weight: bold;
  font-family: roboto;
  height: 30px;
  width: 50px;
  border: 1px solid #3b82f6;
  border-radius: 5px;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 250px;
  border-radius: 8px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  border: 1px solid;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const PopupDescription = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: bold;
  font-family: roboto;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const CloseBtn = styled.button`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: bold;
  font-family: roboto;
  height: 40px;
  width: 80px;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 8px;
  border: ${props =>
    props.isDarkMode ? '1px solid white' : '1px solid black'};
  background-color: transparent;
`
export const ConfirmBtn = styled.button`
  color: #3b82f6;
  font-size: 15px;
  font-weight: bold;
  font-family: roboto;
  height: 40px;
  width: 80px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #3b82f6;
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
`
