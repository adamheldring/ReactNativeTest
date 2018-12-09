import React from 'react'
import { View, Text, Button } from 'react-native'

export default class TalkScreen extends React.Component {

static navigationOptions = {
  title: 'Talk',
}

talkOutLoud = () => {
  Expo.Speech.speak("Hey there, I'm a talking app! Hej där, jag är en pratande app!")
}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
        <Button
          title='Talk!'
          onPress={this.talkOutLoud}
          />

      <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
          />
      </View>
    )
  }
}
