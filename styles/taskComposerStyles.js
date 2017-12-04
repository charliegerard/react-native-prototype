import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    row: {
        backgroundColor: 'red',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    field: {
        flex: 0.7
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})