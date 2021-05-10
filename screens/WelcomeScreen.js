import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image
} from "react-native";

export default class WelcomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
               
                
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/travelicon.jpg")} style={{ width: 150, height: 150 }}></Image>
                        <Text style={styles.titleText}>World Tour</Text>
                        <Text style={styles.titleText}>App</Text>
                    </View>
    
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
   
  
    
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: ""
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 60,
        width: 60,
        resizeMode: "contain"
    }
});