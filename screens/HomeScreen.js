import React from 'react';
import {View, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/appStyles';

const reposUrl = 'https://api.github.com/repos/charliegerard/dev-notes/contents';
const rawContentUrl = 'https://raw.githubusercontent.com/charliegerard/dev-notes/master/';

export default class HomeScreen extends React.Component{

    getFilesNamesInFolder = (repoUrl, folderName) => {
        return fetch(`${repoUrl}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.text()
        })
        .then((data) => {
            var dataParsed = JSON.parse(data);
            var notesNames = [];
            for(var i = 0; i < dataParsed.length; i++){
                notesNames.push(dataParsed[i].name);
                this.getContentFromFile(`${rawContentUrl}/${folderName}/${dataParsed[i].name}`);
            }
            // console.log(notesNames)
            return notesNames
        })
    }

    getFoldersInRepo = () => {
        return fetch(reposUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.text()
        })
        .then((data) => {
            var dataParsed = JSON.parse(data);
            var foldersNames = [];
            for(var i = 0; i < dataParsed.length; i++){
                
                this.getFilesNamesInFolder(`${reposUrl}/${dataParsed[i].name}`, dataParsed[i].name)
            }
            console.log("hello", foldersNames)
        })
    }

    getContentFromFile = (fileUrl) => {
        return fetch(fileUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.text())
        .then((markdown) => {
            console.log(markdown)
        })   
    }

    render(){
        const { navigate } = this.props.navigation;
        // this.getFoldersInRepo();
        return(
            <View style={styles.container}>
                <Text>Dev notes</Text>
                <Button title='Check out current tasks'
                        onPress={() => navigate('TasksList')}/>
                <Button title='Add tasks'
                        onPress={() => navigate('TaskComposer')}/>
            </View>
        )
    }
}