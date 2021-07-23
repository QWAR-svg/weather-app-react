 import React from 'react';
 import Info from './components/Info';
 import Form from './components/Form';
 import Weather from './components/Weather';


//  const API_KEY = "104ad819a9a2d91b1fe977d04bfa83af" ;

 export default class App extends React.Component {

  gettingWeather =  (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=104ad819a9a2d91b1fe977d04bfa83af`)
      .then(data => data.json())
      .then(res => console.log(res));
      
  }

   render() {
     return(
      <div>
        <Info/>
        <Form weatherApi={this.gettingWeather}/>
        <Weather/>
      </div>
     );
   }
 }