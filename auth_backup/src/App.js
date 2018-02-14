import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from "./components/common";
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDWafAn3feIOErgAmdG-3ZLfbY6z0UxzI4",
            authDomain: "auth-843bc.firebaseapp.com",
            databaseURL: "https://auth-843bc.firebaseio.com",
            projectId: "auth-843bc",
            storageBucket: "auth-843bc.appspot.com",
            messagingSenderId: "507369893059"
        });
    }

    render() {
        return (
            <View>
                <Header text="Authentication"></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;
