 import React from 'react';
 import Info from './components/Info';
 import Form from './components/Form';
 import Weather from './components/Weather';


 const API_KEY = "104ad819a9a2d91b1fe977d04bfa83af";

 export default class App extends React.Component {

  gettingWeather = async () => {
      const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`);
      const data = await api_url.json();
      console.log(data);
  }

   render() {
     return(
      <div>
        <Info/>
        <Form/>
        <Weather/>
      </div>
     );
   }
 }