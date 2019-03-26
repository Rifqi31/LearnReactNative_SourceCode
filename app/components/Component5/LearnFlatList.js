import React, {Component} from "react";
import {AppRegistry, View, Text, FlatList, List, ListItem, ListView} from "react-native";

export default class LearnFlatList extends Component {
    // create constructor
    constructor(props){
        super(props);
        this.state = {
            loading : false,
            data : [],
            page : 1,
            seed : 1,
            error : null,
            refreshing : false
        };
    }

    componentDidMount(){
        this.makeRemoteRequest();
    }

    makeRemoteRequest(){
        const {page, seed} = this.state
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading : true })
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: page === 1 ? response.results : [...this.state.data, ...response.results],
                    error: response.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };


    // this function according to documentation
    _renderItem = ({ item }) => {
        <ListView 
            roundAvatar
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            avatar={{ uri: item.picture.thumbnail }}
        />
    }

    // render method
    render(){
        return(
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
        );
    }
}

AppRegistry.registerComponent('LearnFlatList', () => LearnFlatList);