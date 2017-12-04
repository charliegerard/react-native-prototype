import React from 'react';
import {View, Text, SectionList, TextInput, Button} from 'react-native';
import styles from '../styles/taskComposerStyles';

export default class TaskComposer extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: 'Hello World'};
    }

    addTask(){
        console.log("adding task");
    }
    render(){
        return(
            <View style={{height: 100}}>
                <Text>Task Composer</Text>
                
                <View style={styles.row}>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text})}
                        style={styles.field}/>
                    <Button
                        title='add'
                        onPress={() => this.addTask}
                        style={styles.button}/> 

                </View>
            </View>
        )
    }
}