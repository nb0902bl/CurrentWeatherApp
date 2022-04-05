import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import * as Location from 'expo-location';
import Loading from '../Loading/Loading';
import axios from 'axios';
import Weather from '../Weather/Weather';



const API_KEY = 'b1c083c470dab8febe880bbd9787ccc5'
export default class GetCurrentLocation extends Component {

    

    state={
        isLoading:true
    }
    _getWeatherFromApi = async (latitude,longitude) => {
        const {
            data:
            {
                main:
                {temp,
                    feels_like,
                    temp_max,
                    temp_min
                },
                name,
                weather
            },
            
        } = await axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        //console.log(data)
        this.setState({
            isLoading:false ,
            temp:temp,
            feels_like:feels_like,
            temp_max:temp_max,
            temp_min:temp_min,
            name:name,
            weather:weather[0].main,
            descr:weather[0].description
            //cond:weather[0].main
        })
       
    }


    _getCurrentLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync()
            const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync()
            this._getWeatherFromApi(latitude,longitude)
           
        } catch (error) {
            Alert.alert('Не могу получить ваше местоположение ','Включите или дайте доступ к вашей геолокации')
        }   
    }
    componentDidMount(){
        this._getCurrentLocation()
    }
  render() {
    const {
        isLoading,
        temp,
        name,
        temp_min,
        temp_max,
        feels_like,
        weather,
        descr

    } = this.state
    
    return (
      <View>
          {
              isLoading ? 
              <Loading/> 
              : 
              <Weather 
                name={name}
                temp={Math.round(temp - 273,15)}
                temp_min={Math.round(temp_min - 273,15)}
                temp_max={Math.round(temp_max - 273,15)}
                feels_like={Math.round(feels_like - 273,15)}
                weather={weather}
                descr={descr}
              />
          }
      </View>
    )
  }
}
