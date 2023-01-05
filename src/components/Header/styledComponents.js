import styled from 'styled-components'

export const HeadPageContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  padding: 10px;
`
export const HeadPageLogo = styled.img`
  width: 100px;
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
  margin-left: 10px;
  margin-right: 10px;
`
export const ThemeBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  width: 30px;
`
export const LogoutBtn = styled.button`
  color: ${props => (props.isDarkMode ? 'white' : '#3b82f6')};
`
