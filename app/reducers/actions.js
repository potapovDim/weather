import {GET_WEATHER,FAILT_GET_WEATHER,BEGIN} from './action_types'
import axios from 'axios'

const apikey='9bfc6462059a7ac9856fbeb6781c84a4'
function fetchBegin(){
  return{
    type:BEGIN
  }
}

function fetchGetWeather(body) {
  return{
    type:GET_WEATHER,
    body
  }
}
function fetchFailGetWeather(er) {
  return{
    type:FAILT_GET_WEATHER,
    er
  }
}

export function fetchWeather(town) {
  return dispatch=>{
    dispatch(fetchBegin())
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+town+'&appid='+apikey)
      .then(function(response){
        dispatch(fetchGetWeather(response.data))
      })
      .catch(er=>dispatch(fetchFailGetWeather(er)))
  }
}