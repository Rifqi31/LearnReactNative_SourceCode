import React, {Component} from "react";
import {
    AppRegistry, 
    Text, 
    View, 
    StyleSheet, 
    TouchableHighlight, 
    TouchableOpacity
} from "react-native";

export default class LearnStyle2 extends Component {

    onPress(){
        console.log('Button was pressed');
    }

    onPress2(){
        console.log('this button 2 was pressed');
    }

    render(){
        return(
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Learning Curve round 2</Text>
                </View>
                    <View style={styles.container}>
                        <TouchableHighlight 
                            style={styles.Vi1}
                            onPress={this.onPress}
                            underlayColor="blue">
                                <View>
                                    <Text>View 1</Text>
                                </View>
                        </TouchableHighlight>
                            
                        <TouchableOpacity
                            style={styles.Vi2}
                            onPress={this.onPress2}>
                            <View>
                                <Text>View 2</Text>
                            </View>
                        </TouchableOpacity>
                        
                            <View style={styles.Vi3}>
                                <Text style={styles.vText}>View 3</Text>
                            </View>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView : {
        backgroundColor:"blue"
    },
    myText : {
        color:"white"
    },
    container : {
        flexDirection:"row",
        height:100,
    },
    Vi1: {
        flex:1,
        backgroundColor:"red",
        padding:10
    },
    Vi2: {
        flex:1,
        backgroundColor:"green",
        padding:10
    },
    Vi3: {
        flex:1,
        backgroundColor:"black",
        padding:10
    },
    vText: {
        color:"white"
    }
});

AppRegistry.registerComponent("LearnStyle2", () => LearnStyle2);