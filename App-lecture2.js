import React, {Component} from "react";
import {AppRegistry, View} from "react-native";

// import from component 2
import LearnStyle2 from "./app/components/Component2/LearnStyle2";
import LearnTextInput from "./app/components/Component3/LearnTextInput";
import LearnListView from "./app/components/Component4/LearnListView";
import LearnListViewJSON from "./app/components/Component5/LearnListViewJSON";

export default class myapp extends Component {
    render(){
        return(
            <View>
                <LearnStyle2 />
                <LearnTextInput />
                <LearnListView />
                <LearnListViewJSON />
            </View>
        );
    }
}

AppRegistry.registerComponent('myapp', () => myapp);