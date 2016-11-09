import {GET_WEATHER, FAILT_GET_WEATHER, BEGIN} from './action_types'

const initialState = {
  loading: false,
  weather: {
    main: '',
    description: "",
    temperature: '',
    pressure: "",
    temp_min: "",
    temp_max: "",
    wind_speed: ""
  },
  sunrise: '',
  sunset: "",
  town: "",
}

export default(state = initialState, action)=> {
  const {type, body, er}=action
  switch (type) {
    case BEGIN:
      return {
        ...state, loading: true
      }
    case GET_WEATHER:
      return {
        ...state, loading: false,
        sunrise: body.sys.sunrise,
        sunset: body.sys.sunset,
        town: body.name,
        weather: {
          ...state.weather,
          main: body.weather[0].main,
          description: body.weather[0].description,
          temperature: body.main.temp,
          pressure: body.main.pressure,
          temp_min: body.main.temp_min,
          temp_max: body.main.temp_max,
          wind_speed: body.wind.speed
        }
      }
    case FAILT_GET_WEATHER:
      return{
        ...state,loading:false,
        err:er.message
      }
    default:
      return state
    
  }
}

