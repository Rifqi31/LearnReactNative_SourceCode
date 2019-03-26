import React, {Component} from "react";
import {AppRegistry, Text, View, ListView, StyleSheet} from "react-native";

export default class LearnListViewJSON extends Component {

    // create constructor for the data
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            // param from data source API
            userdataSource: ds,
        }
    }

    renderRow(user, sectionId, rowId, hightlightRow){
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name} : {user.email}</Text>
            </View>
        );
       
    }

    // lifecycle of component in react
    componentDidMount(){
        this.fetchusers();
    }

    // fetch data user from json file
    // JSON place holder
    // Fake online Rest API
    // users.json
    fetchusers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userdataSource: this.state.userdataSource.cloneWithRows(response)
                });
            });
        
    }

    // and then render it
    render(){
        return(
            <ListView 
                dataSource={this.state.userdataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom: 4
    },
    rowText: {
        flex:1
    }
});


AppRegistry.registerComponent('LearnListViewJSON', () => LearnListViewJSON);
