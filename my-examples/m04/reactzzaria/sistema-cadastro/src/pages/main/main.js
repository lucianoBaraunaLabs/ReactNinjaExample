import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <>

    <Suspense fallback='Loading...'>
      <Switch>
        <Route>
          <p>Main</p>
        </Route>
      </Switch>
    </Suspense>
  </>
)

export default Main
