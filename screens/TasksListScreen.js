import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default class TasksListScreen extends React.Component{
    render(){
        return (
            <View>
                <Text>Tasks List Screen</Text>
                <FlatList
                    data={[
                        {key: 'Do this'},
                        {key: 'Do that'}
                    ]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}