import React, {Component} from "react";                 // import Component from react library
import {AppRegistry, Text, View} from "react-native";   // import render stuff from react nantive

// import from another file and folder depends what direcotry is
import Component1 from './app/components/Component1/Component1';
import PassMessage from './app/components/Component1/PassMessage';
import StateExample from './app/components/Component1/StateExample';
import PropstoState from './app/components/Component1/PropstoState';
import DefaultProps from './app/components/Component1/DefaultProps';
import LearnStyleSheet from './app/components/Component1/LearnStyleSheet';

// main class extends from Component library in react

// <PassMessage properties=value />
export default class myapp extends Component {
  // render it
  render(){
    return(
      <View>
        <Component1 />
        <PassMessage message="this is message from passing component!"/>
        <StateExample />
        <PropstoState message="this value from props to state!!"/>
        <DefaultProps />
        <LearnStyleSheet />
      </View>
    );
  }
}

// use arrow function to call it
AppRegistry.registerComponent('myapp', () => myapp);