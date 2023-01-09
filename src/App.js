import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

import ProtectedRoutes from './components/ProtectedRoutes'

import VideoItemDetails from './components/VideoItemDetails'

import ContextMessage from './context/ContextMessage'

import './App.css'

class App extends Component {
  state = {
    isDarkMode: false,
    activeTab: '',
    savedVideos: [],
  }

  onChangeTheme = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  onChangeTab = tabId => {
    this.setState({activeTab: tabId})
  }

  onSaveVideo = eachItemVideo => {
    const {savedVideos} = this.state
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, eachItemVideo],
    }))
  }

  onRemoveVideo = id => {
    const {savedVideos} = this.state
    const filterVideos = savedVideos.filter(eachVideo => {
      if (eachVideo.id !== id) {
        return eachVideo
      }
      return null
    })
    this.setState({savedVideos: filterVideos})
  }

  render() {
    const {isDarkMode, activeTab, savedVideos} = this.state

    return (
      <ContextMessage.Provider
        value={{
          isDarkMode,
          onChangeTheme: this.onChangeTheme,
          activeTab,
          onChangeTab: this.onChangeTab,
          savedVideos,
          onSaveVideo: this.onSaveVideo,
          onRemoveVideo: this.onRemoveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoutes exact path="/" component={Home} />
          <ProtectedRoutes exact path="/trending" component={Trending} />
          <ProtectedRoutes exact path="/gaming" component={Gaming} />
          <ProtectedRoutes exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoutes
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoutes component={NotFound} />
        </Switch>
      </ContextMessage.Provider>
    )
  }
}

export default App
