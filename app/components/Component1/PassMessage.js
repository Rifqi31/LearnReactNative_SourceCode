import React, {Component} from "react";
import {AppRegistry, Text, View} from "react-native";

// this.props.message
// call passing properties from main program
export default class PassMessage extends Component {
    render(){
        return(
            <View>
                <Text>{this.props.message}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent("PassMessage", () => PassMessage);