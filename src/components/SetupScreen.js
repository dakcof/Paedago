import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Card, CardSection, Input } from '../common';

class SetupScreen extends Component {
  state = { firstName: '', lastName: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 300, height: 300 }}
              source={{ uri: 'https://www.shareicon.net/data/256x256/2016/06/25/786550_people_512x512.png' }}
            />
          </View>
        </CardSection>
        <CardSection>
          <Input
            placeholder="First Name"
            value={this.state.firstName}
            onChangeText={firstName => this.setState({ firstName })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Last Name"
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
          />
        </CardSection>
      </Card>
    );
  }
}

export default SetupScreen;
