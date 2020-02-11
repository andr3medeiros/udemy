import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../apis/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultDetail = ({ navigation }) => {
    const [business, setBusiness] = useState(null);
    const id = navigation.getParam('id');

    const loadBusiness = async (id) => {
        const response = await yelp.get(`/${id}`);

        setBusiness(response.data);
    };

    useEffect(() => {
        loadBusiness(id);
    },[]);

    if(!business) {
        return null;
    }

    return <View>
        <Text>{business.name}</Text>
        <FlatList 
            data={business.photos}
            keyExtractor={pic => pic}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }}/>
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150
    }
});

export default ResultDetail;