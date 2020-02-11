import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const BoxScreen = () => {
    return <View style={styles.parentStyle}>
        <View style={styles.boxOneStyle} />
        <View style={styles.boxTwoStyle} />
        <View style={styles.boxThreeStyle} />
    </View>
};

const styles = StyleSheet.create({
    parentStyle: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    boxOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red',

    },
    boxTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 100
    },
    boxThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'purple'
    }
})

export default BoxScreen;