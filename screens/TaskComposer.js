import React from 'react';
import {View, Text, SectionList, TextInput, Button} from 'react-native';
import styles from '../styles/taskComposerStyles';
import TaskList from '../components/TaskList';

export default class TaskComposer extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: '', tasks: []};
    }

    addTask(){
      let tasks = this.state.tasks;
      tasks.push({title: this.state.text});
      this.setState({tasks: tasks});
    }

    render(){
        return(
            <View style={{height: 100}}>
                <Text>Task Composer</Text>
                <View style={styles.row}>
                    <TextInput
                        value={this.state.text}
                        defaultValue="Enter text"
                        onChangeText={(text) => this.setState({text})}
                        onFocus={(text) => this.setState({text: ''})}
                        style={styles.field}/>
                    <Button
                        title='add'
                        onPress={() => this.addTask()}
                        style={styles.button}/>
                </View>
                <TaskList tasks={this.state.tasks}/>
            </View>
        )
    }
}
