// @flow
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles/appStyles';
// import TasksList from './components/tasksList';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TasksListScreen from './screens/TasksListScreen';
import TaskComposer from './screens/TaskComposer';

export const AppNavigation = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  TasksList: {screen: TasksListScreen},
  TaskComposer: {screen: TaskComposer}
})

export default class App extends React.Component<> {
  render() {
    return <AppNavigation/>;
  }
}
