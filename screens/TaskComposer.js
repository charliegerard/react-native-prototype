import React from 'react';
import {View, Text, SectionList, TextInput} from 'react-native';

export default class TaskComposer extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: 'Hello World'};
    }
    render(){
        return(
            <View>
                <Text>Task Composer</Text>
                <TextInput 
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
            </View>
        )
    }
}