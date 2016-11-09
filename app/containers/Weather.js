import {connect} from 'react-redux';
import React, {Component} from 'react'
import WeatherTable from '../component/weather'
import fetchWeather from '../reducers/actions'

class Weather extends Component {
  render() {
    return (
      <div>
        <WeatherTable {...this.props}/>
      </div>
    )
  }
}

export default connect(state=>state, {fetchWeather})(Weather)




