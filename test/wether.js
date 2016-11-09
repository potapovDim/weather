import  expect from 'chai'
import axios from 'axios'

describe('api testing', ()=> {
  
  var apikey = '9bfc6462059a7ac9856fbeb6781c84a4'
  it('request with bad data', ()=> {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=London')
      .then(function (response) {
        return response.json()
      }).then(function (json) {

        expect(json.code).to.eqls(401)
      }).catch(e=>console.log(e.message))
  })
  it('request with good data', ()=> {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=London' + '&appid=' + apikey)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log(typeof json)
        expect(json.cod).to.eqls(200)
      }).catch(e=>console.log(e.message))
  })
})
