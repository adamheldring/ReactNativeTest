import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import TalkScreen from './TalkScreen'
import CameraScreen from './CameraScreen'
import AccelerometerScreen from './AccelerometerScreen'

const RootStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Talk: {
    screen: TalkScreen
  },
  Camera: {
    screen: CameraScreen
  },
  Accelerometer: {
    screen: AccelerometerScreen
  }
})

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
