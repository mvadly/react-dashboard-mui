import { useEffect } from 'react'
import { handleLogout } from '../util/actions'
import Router from '../config/Router'

function App() {

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log("user try to change token")
      handleLogout()
    })
  }, [])

    return (
      <Router />
    )
}

export default App;
