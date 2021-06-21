import React from 'react';
import axios from 'axios';
import './Searchbar.css';
import Weather from '../Weather/Weather';
import searchIcon from './searchicon.png';
import questionIcon from './questionicon.png';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            city: "City",
            state: "State",
            country: "Country",
            temperature: "Temperature",
            description: "Description",
            icon: `${questionIcon}`
        }
        this.handleChange = this.handleChange.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }

    handleChange(e) {
        this.setState({searchTerm: e.target.value})
       
    }

    getInfo() {
        axios.get(`/${this.state.searchTerm}`).then(response => {
            this.setState({
                city: response.data.data.location.name,
                state: response.data.data.location.state,
                country: response.data.data.location.country,
                temperature: response.data.data.weather.temperature,
                description: response.data.data.weather.weather_descriptions[0],
                icon: response.data.data.weather.weather_icons[0]
            })
        })
        
    }

    render() {
        return (
            <div>
                <div class="inputcontainer">
                    <input class="searchbar" id="inputfield" onChange={this.handleChange} type="text"></input>
                    <div id="search-button" class="searchbar" onClick={this.getInfo}>
                        <img src={searchIcon} width="40" height="40" />
                    </div>
                </div>
                <Weather 
                city={this.state.city} 
                state={this.state.state} 
                country={this.state.country} 
                temperature={this.state.temperature} 
                description={ this.state.description} 
                icon={this.state.icon} />
            </div>
        );
    }
}

export default SearchBar;