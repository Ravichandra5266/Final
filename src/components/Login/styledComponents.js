import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  padding: 20px;
`
export const LoginContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 300px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px black;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`
export const LogoImg = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const LoginPageLabels = styled.label`
  color: black;
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  padding-left: 5px;
`
export const LoginPageInputs = styled.input`
  color: black;
  height: 40px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  font-family: roboto;
  border: 1px solid #32a852;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 5px;
`
export const PasswordCheckBox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const LoginBtn = styled.button`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: roboto;
  height: 40px;
  width: 100px;
  cursor: pointer;
  background-color: black;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-top: 15px;
`
export const LoginErrorText = styled.p`
  color: red;
  font-size: 15px;
  font-weight: bold;
  font-family: roboto;
`
