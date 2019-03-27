import React, {Component} from "react";
import {AppRegistry, View} from "react-native";

import UserDataList from "./app/components2/Component1/UserDataList";

export default class myapp extends Component {
    render(){
        return(
            <View>
                <UserDataList />
            </View>
        );
    }
}

AppRegistry.registerComponent('myapp', () => myapp);