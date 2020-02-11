import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultItem = ({ item }) => {
    return <View style={styles.container}>
        <Image 
            style={styles.image}
            source={{
                uri: item.image_url
            }}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>{item.rating} Stars, {item.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    },
    rating: {}
});

export default ResultItem;