import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultItem from './ResultItem';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length) {
        return null;
    }
    
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <FlatList 
            horizontal
            data={results}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultDetail', { id: item.id })}>
                        <ResultItem item={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);