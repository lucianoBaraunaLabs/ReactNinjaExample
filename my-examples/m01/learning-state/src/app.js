'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('contructor')
    super()
    this.state = {
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
     <div>
      {this.state.showTimer && <Timer />}



      <button onClick={() =>
        this.setState({ showTimer: !this.state.showTimer })
      }>Show / Hide Timer</button>
     </div>
    )
  }
}
export default App
