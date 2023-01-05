import {Redirect, Route} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoutes = props => {
  const token = Cookies.get('jwtToken')

  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoutes
