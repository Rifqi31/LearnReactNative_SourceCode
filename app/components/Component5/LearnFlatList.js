import React, {Component} from "react";
import {AppRegistry, FlatList, View, ActivityIndicator} from "react-native";
import { ListItem, SearchBar } from 'react-native-elements'
// import { Avatar } from "react-native-elements";

export default class LearnFlatList extends Component {
    // create constructor
    constructor(props){
        super(props);

        // default state component
        this.state = {
            loading : false,
            data : [],
            // this depends on API
            page : 1,
            seed : 1,
            //
            error : null,
            refreshing : false
        };
    }

    componentDidMount(){
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const {page, seed} = this.state
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=10`;
        this.setState({ loading : true })
        setTimeout(() => {
            fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    // data: page === 1 ? response.results : [...this.state.data, ...response.results],
                    data: [...this.state.data, ...response.results],
                    error: response.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false, refreshing: false });
            });
        }, 1500)
    };

     // pull to refresh
     handleRefresh = () => {
        this.setState(
            {
              page: 1,
              seed: this.state.seed + 1,
              refreshing: true
            },
            () => {
              this.makeRemoteRequest();
            }
        );
    };

    // infinite scroll
    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1,
        }, () => {
            this.makeRemoteRequest();
        });
      };

     // styling
     renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
              marginLeft: "14%"
            }}
          />
        );
      };

    // renderHeader = () => {
        //     return <SearchBar placeholder="Type Here..." lightTheme round />;
        // };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
    };

    // render method
    render(){
        return(
                <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            // show the data
                            <ListItem
                              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                              title={`${item.name.first} ${item.name.last}`}
                              subtitle={item.email}
                              containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
                            />
                          )}
                          keyExtractor={item => item.login.uuid}
                          
                          
                          // for separator
                          ItemSeparatorComponent={this.renderSeparator}
                          // ListHeaderComponent={this.renderHeader}
                          ListFooterComponent={this.renderFooter}
                          // pull down refresh
                          onRefresh={this.handleRefresh}
                          refreshing={this.state.refreshing}
                          // infinite scroll down
                          onEndReached={this.handleLoadMore}
                          onThreshold={0}
                          //onEndReachedThreshold={0}

                          // performance  
                        //   // for memory friendly
                        //   removeClippedSubviews={true}
                        //   // for render per batch
                        //   maxToRenderPerBatch={7}
                        //   // set value on the screen in every device
                        //   initialNumToRender={7}
                />
               
        );
    }
}

AppRegistry.registerComponent('LearnFlatList', () => LearnFlatList);
