import React from 'react';
import {View} from 'react-native';
import Task from './Task';

export default class TaskList extends React.Component{
  constructor(props){
    super(props);
  }

  renderTasks(){
    return this.props.tasks.map(task => {
      return(
        <Task taskName={task.title}/>
      )
    })
  }

  render(){
    return(
      <View>
        {this.renderTasks()}
      </View>
    )
  }
}
