import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', error: '' };
    onLoginButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((err) => {
                //this.setState({ error: 'Failed![' + err + ']' });
                Alert.alert('Failed', `${err}`);
            });
    }

    onCreateLoginButtonPress() {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                //this.setState({ error: 'Failed![' + err + ']' });
                Alert.alert('Failed', `${err}`);
            });
    }

    render() {
        return (
            <Card>
            <CardSection>
                <Input
                    label="Email"
                    placeHolder="user@gmail.com"
                    value={this.state.email} 
                    onChangeText={email => this.setState({ email })}
                />
            </CardSection>
            
            <CardSection>
                <Input
                    placeHolder="password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureText
                />
            </CardSection>

            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>

             <CardSection>
                    <Button onPress={this.onLoginButtonPress.bind(this)}>
                        Log in
                    </Button>
                    <Button onPress={this.onCreateLoginButtonPress.bind(this)}>
                        Create
                    </Button>
            </CardSection>
        </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
