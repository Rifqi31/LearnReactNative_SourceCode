import React, {Component} from "react";
import {AppRegistry, Text, View, ListView, StyleSheet} from "react-native";

// this should be form API
const users = [
    {name: 'Jhone Doe'},
    {name: 'Brad Traversy'},
    {name: 'Karen'}
]

export default class LearnListView extends Component {

    // create constructor for the data
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            // param from data source API
            // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            userdataSource: ds.cloneWithRows(users),
        }
    }

    // Take entry from data source
    renderRow(user, sectionId, rowId, hightlightRow){
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
        );
       
    }

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

AppRegistry.registerComponent('LearnListView', () => LearnListView);
