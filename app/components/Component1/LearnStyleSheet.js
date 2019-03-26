import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet} from "react-native";

export default class LearnStyleSheet extends Component {
    render(){
        return(
            <View style={{backgroundColor:"black"}}>
                <Text style={{color:"white"}}>This is example of style</Text>
                <Text style={styles.myFont}>This style from style constanta</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myFont: {
        color:"blue"
    }
});


AppRegistry.registerComponent("LearnStyleSheet", () => LearnStyleSheet);