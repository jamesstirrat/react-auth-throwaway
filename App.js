import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB0ZXTfIUjR-DOTRB2j6mFldVlIdRBxyGY",
    authDomain: "react-auth-throwaway.firebaseapp.com",
    databaseURL: "https://react-auth-throwaway.firebaseio.com",
    projectId: "react-auth-throwaway",
    storageBucket: "react-auth-throwaway.appspot.com",
    messagingSenderId: "689841416803",
    appId: "1:689841416803:web:130c8c195beb30642fe656",
    measurementId: "G-VB8GC83GY7"
  };

  firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: HomeScreen
})

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initalRouteName: LoadingScreen
    }
  )
)
