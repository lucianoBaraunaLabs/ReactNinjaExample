import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import reportWebVitals from './reportWebVitals'

import ErrorBoundary from './error'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      {(hasError) => (
        <Root hasError={hasError} />
      )}
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
