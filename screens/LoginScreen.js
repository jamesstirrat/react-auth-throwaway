import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  state = {
      email: "",
      password: "",
      errorMessage: null
  };

  handleLogin = () => {
    const {email, password} = this.state

    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}));
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.greeting}>Hello Again,{"\n"}Asshole</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput style={styles.input}
                     autoCapitalize='none'
                     onChangeText={email => this.setState({email})}
                     value={this.state.email}
                     ></TextInput>
        </View>

      <View style={styles.form}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput style={styles.input}
                   autoCapitalize='none'
                   secureTextEntry
                   onChangeText={password => this.setState({password})}
                   value={this.state.password}
                   ></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
        <Text style={{fontWeight:'400', color: 'white'}}>Start Wasting Time</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => this.props.navigation.navigate('Register')}>
        <Text>New to Here?</Text><Text style={{fontWeight:'400', color: '#8A8F9E'}}>Go Away</Text>
      </TouchableOpacity>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: 'center'
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: 'red'
  },
  form: {
    marginBottom: 40,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    fontSize: 16
  },
  button: {
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    backgroundColor: '#8A8F9E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondary: {
    padding: 10,
    height: 50,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
