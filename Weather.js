import React from 'react';
import './Weather.css';

class Weather extends React.Component {
    render() {
        return (
            <div class="container">
                <h1 class="weather" id="city">{this.props.city}</h1>
                <h3 class="weather" id="location">{this.props.state}, {this.props.country}</h3>
                <img class="weather" src={this.props.icon} alt={this.props.description} width='80' height='80' id="icon"></img>
                <h2 class="weather" id="temperature">{this.props.temperature}° Celsius</h2>
                <h3 class="weather" id="description">{this.props.description}</h3>
            </div>
        )
    }
}

export default Weather;