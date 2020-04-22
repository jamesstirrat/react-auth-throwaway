import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
  state = {
      name: "",
      email: "",
      password: "",
      errorMessage: null
  };

  handleSignUp = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredentials => {
      return userCredentials.user.updateProfile({
        displayName: this.state.name
      })
    })
    .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.greeting}>Seriously,{"\n"} You Are Not Welcome!</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>
          <Text style={styles.inputTitle}>Full Name</Text>
          <TextInput style={styles.input}
                     onChangeText={name => this.setState({name})}
                     value={this.state.name}
                     ></TextInput>
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

      <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
        <Text style={{fontWeight:'400', color: 'white'}}>Join Hitlist!</Text>
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
});
