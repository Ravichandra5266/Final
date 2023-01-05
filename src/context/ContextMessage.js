import React from 'react'

const ContextMessage = React.createContext({
  isDarkMode: false,
  onChangeTheme: () => {},
})

export default ContextMessage
