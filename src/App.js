import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import ProtectedRoutes from './components/ProtectedRoutes'

import ContextMessage from './context/ContextMessage'

import './App.css'

class App extends Component {
  state = {
    isDarkMode: false,
  }

  onChangeTheme = () => {
    this.setState({isDarkMode: true})
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <ContextMessage.Provider
        value={{
          isDarkMode,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoutes exact path="/" component={Home} />
        </Switch>
      </ContextMessage.Provider>
    )
  }
}

export default App
