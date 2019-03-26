import React, {Component} from "react";
import {AppRegistry, Text, View} from "react-native";

// this.props.message
// call passing properties from main program
export default class DefaultProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            message :  this.props.message
        }
    }


    static defaultProps = {
        message : "this is default props"
    }

    // main render
    // from
    //   <Text>{this.props.message}</Text>
    // to 
    //   <Text>{this.state.message}</Text>
    render(){
        return(
            <View>
                <Text>{this.state.message}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent("DefaultProps", () => DefaultProps);