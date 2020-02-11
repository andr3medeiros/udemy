import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 30 },
        { name: 'Friend #2', age: 31 },
        { name: 'Friend #3', age: 32 },
        { name: 'Friend #4', age: 33 },
        { name: 'Friend #5', age: 34 },
        { name: 'Friend #6', age: 35 },
        { name: 'Friend #7', age: 36 },
        { name: 'Friend #8', age: 37 },
        { name: 'Friend #9', age: 38 },
        { name: 'Friend #10', age: 39 }
    ];

    return <FlatList 
                keyExtractor={(item, index) => `${index}`}
                data={friends} 
                renderItem={({ item }) => <Text style={styles.textStyle}>Name: {item.name} - Age: {item.age}</Text>}
            />
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;