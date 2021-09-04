import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'
import { useAuth } from 'hooks'

import { HOME, LOGIN } from 'routes'

// Fazendo o import dinâmico.
const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App () {
  const location = useLocation()
  const { userInfo, setUserInfo } = useAuth()
  const { isUserLoggedIn } = userInfo
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      })
      setDidCheckUserIn(true)
    })
  }, [setUserInfo])

  // Se usuário esta logado ou não. Enquanto isso mostra loading
  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  // Se usuário estiver logado e na página de login
  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  // Se usuário não estiver logado e não estiver na página de login
  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    // Suspense faz parte do import dinâmico
    // é nele que precisamos colocar como filho
    // os componentes que queremos dinâmicos.
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

export default App
