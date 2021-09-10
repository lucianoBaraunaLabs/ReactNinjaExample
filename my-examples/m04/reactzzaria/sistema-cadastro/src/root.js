import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import App from './app'
import { AuthProvider } from 'contexts'

const theme = createMuiTheme({
  extend: {
    drawerWidth: 280
  }
})

console.log(theme)

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
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
