import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginPageContainer,
  LoginContentContainer,
  LogoContainer,
  LogoImg,
  LoginPageLabels,
  LoginPageInputs,
  PasswordCheckBox,
  FlexContainer,
  LoginBtn,
  LoginFormContainer,
  LoginErrorText,
} from './styledComponents'

class Login extends Component {
  state = {
    isSubmitted: false,
    errorText: '',
    username: '',
    password: '',
    ShowPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    const {ShowPassword} = this.state
    this.setState({ShowPassword: !ShowPassword})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const loginApiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const responseUrl = await fetch(loginApiUrl, options)

    const responseData = await responseUrl.json()

    // console.log(responseUrl)
    // console.log(responseData)

    if (responseUrl.ok === true) {
      Cookies.set('jwtToken', responseData.jwt_token, {expires: 30})

      const {history} = this.props

      //   console.log(history)

      history.replace('/')
    } else {
      this.setState({errorText: responseData.error_msg, isSubmitted: true})
    }
  }

  render() {
    const {
      username,
      password,
      ShowPassword,
      errorText,
      isSubmitted,
    } = this.state

    const token = Cookies.get('jwtToken')

    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginPageContainer>
        <LoginContentContainer>
          <LogoContainer>
            <LogoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </LogoContainer>
          <LoginFormContainer onSubmit={this.onSubmitLoginForm}>
            <LoginPageLabels htmlFor="username">USERNAME</LoginPageLabels>
            <LoginPageInputs
              id="username"
              value={username}
              placeholder="Username"
              type="text"
              onChange={this.onChangeUsername}
            />
            <LoginPageLabels htmlFor="password">PASSWORD</LoginPageLabels>
            {ShowPassword ? (
              <LoginPageInputs
                id="password"
                value={password}
                placeholder="Password"
                type="text"
                onChange={this.onChangePassword}
              />
            ) : (
              <LoginPageInputs
                id="password"
                value={password}
                placeholder="Password"
                type="password"
                onChange={this.onChangePassword}
              />
            )}
            <FlexContainer>
              <PasswordCheckBox
                id="checkbox"
                value={ShowPassword}
                type="checkbox"
                onClick={this.onClickShowPassword}
              />
              <LoginPageLabels htmlFor="checkbox">
                Show Password
              </LoginPageLabels>
            </FlexContainer>
            <LoginBtn type="submit">Login</LoginBtn>
            {isSubmitted && <LoginErrorText>{`* ${errorText}`}</LoginErrorText>}
          </LoginFormContainer>
        </LoginContentContainer>
      </LoginPageContainer>
    )
  }
}

export default Login
