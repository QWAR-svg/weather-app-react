import React from 'react';
import './Weather.css'
export default class Weather extends React.Component {

   
    render() {
        let z;
        let x;
        const {temp,city, country,sunrise, sunset, error } = this.props.data;
       if (temp === undefined) {
            x = ""
       } else if (temp > 50) {
            x = "Жара";
            z = "hot";
       } else {
            x = "Холодно";
            z = "cold";
       }



        return (
            <div  className={`weather-app ${z}`}>
                <p>{temp}</p>
                <p>{city}</p>
                <p>{country}</p>
                <p>{sunrise}</p>
                <p>{sunset}</p>
                <p>{error}</p>
                <div>{x}</div>
            </div>
        )
    }
}