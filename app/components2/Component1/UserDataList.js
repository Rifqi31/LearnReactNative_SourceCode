import React, {PureComponent} from "react";
import {AppRegistry, FlatList, View, ActivityIndicator } from "react-native";
import { ListItem } from 'react-native-elements';

export default class UserDataList extends PureComponent {
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
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                data: [...this.state.data, ...response.results],
                error: response.error || null,
                loading: false,
                // refreshing: false
            });
        })
        .catch(error => {
            this.setState({ error, loading: false});
        });
    }

     // infinite scroll
     handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1,
            loading: true
        }, () => {
            this.makeRemoteRequest();
        });
      }

      // render loading image
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
    }

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
      }

    render(){
        return(
            <View>
                <FlatList 
                    data={this.state.data}
                    keyExtractor={item => item.login.uuid}
                    renderItem={({ item }) => (
                        // show the data
                            <ListItem
                                leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                                title={`${item.name.first} ${item.name.last}`}
                                subtitle={item.email}
                                containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
                            />
                      )}
                      
                      // for separator
                      ItemSeparatorComponent={this.renderSeparator}
                      // show loading image
                      ListFooterComponent={this.renderFooter}
                      // infinite scroll
                      onEndReached={this.handleLoadMore}
                      onEndReachedThreshold={0.5}
                      initialNumToRender={10}

                      // performence
                      removeClippedSubviews={false}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('UserDataList', () => UserDataList);
