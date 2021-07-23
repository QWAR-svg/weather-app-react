import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            
            <form onSubmit={this.props.weatherApi}>
                <input name="city" type="text" placeholder="City"/>
                <button >Get weather</button>
            </form>

        );
    }
}