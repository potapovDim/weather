import {Provider} from 'react-redux'
import store from '../store'
import React, {Component} from 'react'
import Weather from './Weather'

class WeatherWithStore extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Weather />
        </div>
      </Provider>
    )
  }
}

export default WeatherWithStore