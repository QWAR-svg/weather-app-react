import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

//  const API_KEY = "104ad819a9a2d91b1fe977d04bfa83af" ;

export default class App extends React.Component {


  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }
  gettingWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city === '') {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Enter city"
      })
    } else {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=104ad819a9a2d91b1fe977d04bfa83af`)
        .then(data => data.json())
        .then(res => {
          console.log(res);
          this.setState({
            temp: res.main.temp,
            city: res.name,
            country: res.sys.country,
            sunrise: res.sys.sunrise,
            sunset: res.sys.sunset,
            error: ""
          });

        })
        .catch(res => {
          this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunrise: undefined,
            sunset: undefined,
            error: "Enter right name"
          })
        })
    }

  }

  render() {
    return (
      <div className="container">
        <Info />
        <Form weatherApi={this.gettingWeather} />
        <Weather data={this.state} />
      </div>
    );
  }
}