import React, {Component} from 'react';


class InputBar extends React.Component{
    
    constructor(props){
        
        
        super(props);
        this.state = {
            city:"Paris",
            weatherDescription:"Sunny",
            temp:20
        }
        this.weatherRequest = this.weatherRequest.bind(this);
        
    }
    GetWeatherData(location){
        let scope = this;
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a0a56053415cd2354338eb10e89d0fd6',{mode: 'cors'})
        .then(function(response){
            return response.json()
        })
        .then(function(response){
    
            scope.setState({
                city: location,
                temp:Math.round(response.main.temp_max-273.15),
                weatherDescription: response.weather[0].description    
            })
            
            
        })
    }
    componentDidMount(){
        this.GetWeatherData("Athens");
    }
    weatherRequest(){
        const location = document.getElementById("searchbar").value;
       
        this.GetWeatherData(location);
    }
    render(){
        return(
            <div>
                <h1>{this.state.city}</h1>
                <h3>{this.state.temp}</h3>
                <h6>{this.state.weatherDescription}</h6>
                <input type="text" name="Location" id="searchbar" ref="seachbar"/>
                <button id="searchBtn" onClick={this.weatherRequest}>Search</button>
            </div>
        );
    }

}
export default InputBar;