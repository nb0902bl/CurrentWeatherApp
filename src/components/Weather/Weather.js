import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../../SizeWindow'
import {Fontisto,MaterialCommunityIcons,Ionicons,Feather} from 'react-native-vector-icons'


const Weather = ({weather,name,temp,temp_min,temp_max,feels_like,descr})=> {
    //console.log(temp)
    const {
        temperature,
        gif,
        container,
        mainContainer,
        containerData,
        temperatureData,
        temperatureText
    } = styles
    
    return (
      <View style={container}>
        {
             weather=="Clear"? 
             <ImageBackground style={gif} source={{url:'https://i.gifer.com/XFbw.gif'}}>
                <View style={mainContainer}>
                    <Text style={temperature}>{name} </Text>
                    <Text style={temperatureText}>{temp}°C</Text>  
                    <Fontisto style={temperature} name='day-cloudy'size={30} />
                    <View style={containerData}>
                      <Text style={temperatureData}>{descr}</Text>
                      <Text style={temperatureData}>max:{temp_max}°C, min:{temp_min}°C</Text>
                    </View>
                </View>    
             </ImageBackground>: weather=="Clouds"? 
              <ImageBackground style={gif} source={{url:'https://i.gifer.com/bFF.gif'}}>
                <View style={mainContainer}>
                    <View style={containerData}>
                      <Text style={temperature}>{name} </Text>
                      <Text style={temperatureText}>{temp}°C</Text> 
                      <Fontisto style={temperature} name='cloudy'size={30} />
                      <Text style={temperatureData}>{descr}</Text>
                      <Text style={temperatureData}>max:{temp_max}°C, min:{temp_min}°C</Text>
                     
                    </View>
                </View>   
              </ImageBackground>: weather=="Thunderstorm"? 
              <ImageBackground style={gif} source={{url:'https://i.gifer.com/9Nos.gif'}}>
                <View style={mainContainer}>
                    <Text style={temperature}>{name} </Text>
                    <Text style={temperatureText}>{temp}°C</Text>  
                    <Ionicons style={temperature} name='thunderstorm-outline'size={35}/>
                      <View style={containerData}>
                      <Text style={temperatureData}>{descr}</Text>
                      <Text style={temperatureData}>max:{temp_max}°C, min:{temp_min}°C</Text>
                    </View>
                </View>      
              </ImageBackground>:weather=="Drizzle"? 
              <ImageBackground style={gif} source={{url:'https://i.gifer.com/7scx.gif'}}>
                <View style={mainContainer}>
                    <Text style={temperature}>{name} </Text>
                    <Text style={temperatureText}>{temp}°C</Text>  
                    <Feather style={temperature} name='cloud-drizzle'size={35}/>
                      <View style={containerData}>
                      <Text style={temperatureData}>{descr}</Text>
                      <Text style={temperatureData}>max:{temp_max}°C, min:{temp_min}°C</Text>
                    </View>
                </View>      
              </ImageBackground>:weather=="Rain"? 
              <ImageBackground style={gif} source={{url:'https://i.gifer.com/V9O.gif'}}>
                <View style={mainContainer}>
                    <Text style={temperature}>{name} </Text>
                    <Text style={temperatureText}>{temp}°C</Text>  
                    <MaterialCommunityIcons style={temperature} name='weather-pouring'size={35}/>
                      <View style={containerData}>
                      <Text style={temperatureData}>{descr}</Text>
                      <Text style={temperatureData}>max:{temp_max}°C, min:{temp_min}°C</Text>
                    </View>
                </View>  
              </ImageBackground>:weather=="Snow"? 
              <ImageBackground style={gif} source={{url:'https://i.gifer.com/YWuH.gif'}}>
                <View style={mainContainer}>
                    <Text style={temperature}>{name} </Text>
                    <Text style={temperatureText}>{temp}°C</Text>  
                    <MaterialCommunityIcons style={temperature} name='weather-snowy-heavy'size={35}/>
                      <View style={containerData}>
                      <Text style={temperatureData}>{descr}</Text>
                      <Text style={temperatureData}>max:{temp_max}°C ,min:{temp_min}°C</Text>
                    </View>
                </View>                   
              </ImageBackground>:console.log("sorry)")
        }
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
    temperature:{
        fontSize:35,
        color:'white',
        textAlign: "center",
        lineHeight: 54,
        textShadowColor: 'black', textShadowOffset: { width: 5, height: 5 }, textShadowRadius: 1,
        
    },
    temperatureText:{
      fontSize:30,
        color:'white',
        textAlign: "center",
        lineHeight: 54,
        textShadowColor: 'black', textShadowOffset: { width: 5, height: 5 }, textShadowRadius: 1,
    },
    temperatureData:{
        fontSize:20,
        textAlign: "center",
        color:'white',
        fontWeight:'600',
        marginBottom:10
    },

    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:windowHeight * 1,
        
        
    },

    gif:{
        flex: 1,
        justifyContent: "center",
        width:windowWidth / 0.5,
        height:windowHeight * 1,
        
    },
    containerData:{
      backgroundColor: '#0000006c',
      borderRadius:20,
      width:windowWidth * 0.5,
      padding:5
    },
})
export default Weather