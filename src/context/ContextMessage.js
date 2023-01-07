import React from 'react'

const ContextMessage = React.createContext({
  isDarkMode: false,
  onChangeTheme: () => {},
  activeTab: 'Home',
  onChangeTab: () => {},
})

export default ContextMessage
