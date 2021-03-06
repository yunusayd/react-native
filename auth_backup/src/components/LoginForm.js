import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '' }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="user@gmail.com"
                        value={ this.state.email } 
                        onChangeText={email => this.setState({ email }) }
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                        <Button>
                            Log in
                        </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;