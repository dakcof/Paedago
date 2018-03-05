import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/common';
import LoginForm from './src/components/LoginForm';
import SetupScreen from './src/components/SetupScreen';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCRqoSyQCq0eF9otxv1UANnau5R_IKOH0w',
      authDomain: 'paedago-db003.firebaseapp.com',
      databaseURL: 'https://paedago-db003.firebaseio.com',
      projectId: 'paedago-db003',
      storageBucket: 'paedago-db003.appspot.com',
      messagingSenderId: '369137277895'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <SetupScreen />
            <View style={{ paddingTop: 5, height: 50 }}>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </View>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ paddingBottom: 190, alignSelf: 'center' }}>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Login' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
