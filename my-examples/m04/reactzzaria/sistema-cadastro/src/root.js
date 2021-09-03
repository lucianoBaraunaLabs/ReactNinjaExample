import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import App from './app'
import { AuthProvider, OrderProvider } from 'contexts'

const theme = createMuiTheme({})

console.log(theme)

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <OrderProvider>
          <CssBaseline />
          <GlobalStyle />
          <BrowserRouter>
            {/*
                Colocando as informações de rota dentro do App
                utilizando o componente Route
              */}
            <Route component={App} />
          </BrowserRouter>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

export default hot(module)(Root)
