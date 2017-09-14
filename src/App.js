import React, { Component } from 'react'
import 'webcomponentsjs'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Web components + React</h1>
        <hello-world who='Al' />
      </div>
    )
  }
}

export default App
