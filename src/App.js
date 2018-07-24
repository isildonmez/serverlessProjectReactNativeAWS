import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';

class App extends Component {
  state = {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    authCode: '',
    user: {}
  }

  async signUp() {
    const { username, password, phone_number, email } = this.state
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number }
    })
    console.log('sign up successful!')
  }

  async confirmSignUp() {
    const { username, authCode } = this.state
    await Auth.confirmSignUp(username, authCode)
    console.log('confirm sign up successful!')
  }

  async signIn() {
    const { username, password } = this.state
    const user = await Auth.signIn(username, password)
    this.setState({ user })
    console.log('sign in sucessful')
  }

  async confirmSignIn() {
    const { user, authCode } = this.state
    await Auth.confirmSignIn(user, authCode)
    console.log('user now successfully signed in to the app!!')
  }

  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default App;
