import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  state = {
      email: '',
      displayName: ''
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({email, displayName});
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };


  render() {
    return(
      <View>
        <Text>Hey, {this.state.email}!</Text>
        <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
          <Text style={{fontWeight:'400', color: '#8A8F9E'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
