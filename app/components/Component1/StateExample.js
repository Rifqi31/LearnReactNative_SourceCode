import React, {Component} from "react";
import {AppRegistry, Text, View} from "react-native";

export default class StateExample extends Component {
    // create constructor for state with the object
    constructor(){
        super();
        this.state = {
            first_name : 'Evelyn',
            last_name : 'Sinatra',
            Country : 'Canada',
            showCountry : false
        }
    }

    // this main render
    // call the state object properties
    render(){   
        // ternary operator --> variable = condition is true ? result condition true : 'else return result';
        // if (this.state.showCountry == true) {
        //     this.state.Country
        // } else {
        //     'No Have Country';
        // }
        let person_country = this.state.showCountry ? this.state.Country : 'No have country';

        return(
            <View>
                <Text>{this.state.first_name}</Text>
                <Text>{this.state.last_name}</Text>
                <Text>{person_country}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent("StateExample", () => StateExample);