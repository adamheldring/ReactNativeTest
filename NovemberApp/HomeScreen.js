import React from 'react'
import { View, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ADAM's MULTI TOOL APP</Text>
        <Button
          title='Go to Talk'
          onPress={() => this.props.navigation.navigate('Talk')}
          />
        <Button
          title='Go to Camera'
          onPress={() => this.props.navigation.navigate('Camera')}
          />
        <Button
          title='Go to Accelerometer'
          onPress={() => this.props.navigation.navigate('Accelerometer')}
          />


      </View>
    )
  }
}
