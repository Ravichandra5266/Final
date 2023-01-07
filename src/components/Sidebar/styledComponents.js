import styled from 'styled-components'

export const SidebarPageContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 30%;
  padding: 10px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
    @media screen and (min-width: 768px) {
      display: flex;
      @media screen and (min-width:992px) {
        width:250px;
      }
    }
  }
`
export const SidebarTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: ${props => (props.activeTab ? '2px solid #3b82f6' : '')};
`
export const SidebarMenuText = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
  margin-left: 10px;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
`
export const SidebarMenuBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const SidebarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SidebarBottomHeading = styled.h1`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
  margin-left: 20px;
`
export const SidebarBottomDescription = styled.p`
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
  font-family: roboto;
`
export const SidebarBottomImg = styled.img`
  width: 50px;
  margin-left: 10px;
  margin-right: 10px;
`
