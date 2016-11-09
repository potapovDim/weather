import {Provider} from 'react-redux'
import store from './store'
import React, {Component} from 'react'
import WeatherWithStore from './containers/index'
import Weather from './containers/Weather'

class App extends Component {
  render() {
    return (
      <div className="main">
        <WeatherWithStore >
          <Weather />
        </WeatherWithStore>
      </div>
    )
  }
}

export default App