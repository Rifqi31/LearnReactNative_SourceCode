import React, {Component} from "react";
import {AppRegistry, Text, View, TextInput, Switch} from "react-native";

export default class LearnTextInput extends Component {
    constructor(){
        super();
        this.state = {
            textValue: 'Heloo There!',
            switchVal: false
        }
    }

    // text value
    onChangeText(value){
        this.setState({
            textValue:value
        });
    }

    // text submit
    onSubmit(){
        console.log("this value was submited");
    }

    // switch value
    onSwitchChangeValue(value){
        this.setState({
            switchVal: value
        });
    }
    
    render(){
        return(
            <View>
                <TextInput 
                    placeholder="Enter Text"
                    value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={this.onSubmit}
                />
                <Text>{this.state.textValue}</Text>

                <Switch 
                    value={this.state.switchVal} 
                    onValueChange={(value) => this.onSwitchChangeValue(value)}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('LearnTextInput', () => LearnTextInput);
