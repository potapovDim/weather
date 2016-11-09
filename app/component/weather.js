import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchWeather} from '../reducers/actions'
import {Typeahead} from 'react-typeahead'

class WeatherTable extends Component {


  handleGetWeather = ()=> {
    let a = this.refs.tepyhead.refs.entry.value
    this.props.fetchWeather(a)
  }

  render() {
    console.log(this.props)
    return (
      <div className="content">
        <h1>Weather</h1>
        <div>
          <a><Typeahead className="field" ref="tepyhead"
                        options={['London', 'Kiev', 'Lviv', 'Ks']}
                        maxVisible={4}
          /></a><a>
          <button className="btn" type="submit" onClick={this.handleGetWeather}>Get Weather</button>
        </a>
          <form>
            <b><i>City/Town </i></b><i>{this.props.town}</i>
            <br></br>
            <b><i>Sunrise </i></b><i>{JSON.stringify(new Date(this.props.sunrise * 1000))}</i>
            <br></br>
            <b><i>Sunset </i></b><i>{JSON.stringify(new Date(this.props.sunset * 1000))}</i>
            <br></br>
            <b><i>Sky </i></b><i>{this.props.weather.main}</i>
            <br></br>
            <b><i>Sky description </i></b><i>{this.props.weather.description}</i>
            <br></br>
            <b><i>Temperature </i></b><i>{parseFloat((this.props.weather.temperature - 273).toFixed(2))} C</i>
            <br></br>
            <b><i>Max temperature </i></b><i>{parseFloat((this.props.weather.temp_max - 273).toFixed(2))} C</i>
            <br></br>
            <b><i>Min temperature </i></b><i>{parseFloat((this.props.weather.temp_min - 273).toFixed(2))} C</i>
            <br></br>
            <b><i>Wind speed </i></b><i>{this.props.weather.wind_speed} m/s</i>
            <br></br>
          </form>
        </div>
      </div>
    )
  }
}


//<b><i>City/Town </i></b><i>{this.props.town}</i>
//<br></br>
//<b><i>Sunrise </i></b><i>{JSON.stringify(new Date(this.props.sunrise * 1000))}</i>
//<br></br>
//<b><i>Sunset </i></b><i>{JSON.stringify(new Date(this.props.sunset * 1000))}</i>
//<br></br>
//<b><i>Sky </i></b><i>{this.props.weather.main}</i>
//<br></br>
//<b><i>Sky description </i></b><i>{this.props.weather.description}</i>
//<br></br>
//<b><i>Temperature   </i></b><i>{parseFloat((this.props.weather.temperature - 273).toFixed(2))} C</i>
//  <br></br>
//  <b><i>Max temperature </i></b><i>{parseFloat((this.props.weather.temp_max - 273).toFixed(2))} C</i>
//  <br></br>
//  <b><i>Min temperature </i></b><i>{parseFloat((this.props.weather.temp_min - 273).toFixed(2))} C</i>
//  <br></br>
//  <b><i>Wind speed </i></b><i>{this.props.weather.wind_speed} m/s</i>
export default connect(state=>state, {fetchWeather})(WeatherTable)