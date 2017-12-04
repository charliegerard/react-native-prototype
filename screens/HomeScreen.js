import React from 'react';
import {View, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/appStyles';

export default class HomeScreen extends React.Component{

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button title='Check out current tasks'
                        onPress={() => navigate('TasksList')}/>
                <Button title='Add tasks'
                        onPress={() => navigate('TaskComposer')}/>
            </View>
        )
    }
}