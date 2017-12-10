import React from 'react';
import {View, Text} from 'react-native';

export default class Task extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text>{this.props.taskName}</Text>
      </View>
    )
  }
}
