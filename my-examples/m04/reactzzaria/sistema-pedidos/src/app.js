import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import t from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'

import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'

// Fazendo o import dinâmico.
const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext)
  const { isUserLoggedIn } = userInfo
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
      setDidCheckUserIn(true)
    })

    window.logout = logout
  }, [])

  if (!didCheckUserIn) {
    console.log('ainda não checou se o usuário está logado ou não')
    return <LinearProgress />
  }

  console.log('já chegou se usuário está logado ou não')

  if (isUserLoggedIn) {
    console.log('usuário está logado')
    if (location.pathname === '/login') {
      console.log('logado e na página de login')
      return <Redirect to='/' />
    } else {
      console.log('logado MAS NÃO está na página de login')
    }
  } else {
    console.log('não está logado')
    if (location.pathname !== '/login') {
      return <Redirect to='/login' />
    } else {
      console.log('usuário não está logado e na página de login')
    }
  }

  return (
    // Suspense faz parte do import dinâmico
    // é nele que precisamos colocar como filho
    // os componentes que queremos dinâmicos.
    <Suspense>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
