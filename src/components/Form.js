import React from 'react';
import './Form.css';
export default class Form extends React.Component {
    render() {
        return (
            
            <form className="form-weather" onSubmit={this.props.weatherApi}>
                <input name="city" type="text" placeholder="City"/>
                <button className="weather-btn" >Get weather</button>
            </form>

        );
    }
}