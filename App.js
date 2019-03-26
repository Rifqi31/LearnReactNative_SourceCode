import React, {Component} from "react";
import {AppRegistry, View} from "react-native";

import LearnFlatList from "./app/components/Component5/LearnFlatList";

export default class myapp extends Component {
    render(){
        return(
            <View>
                <LearnFlatList />
            </View>
        );
    }
}

AppRegistry.registerComponent('myapp', () => myapp);