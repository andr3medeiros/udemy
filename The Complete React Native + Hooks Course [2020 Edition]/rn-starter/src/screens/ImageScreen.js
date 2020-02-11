import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = props => {
    return <View>
        <ImageDetail 
            title="Forest" 
            imgSrc={require('../../assets/forest.jpg')}
            score={9}
        />
        <ImageDetail 
            title="Beach" 
            imgSrc={require('../../assets/beach.jpg')}
            score={7}
        />
        <ImageDetail 
            title="Mountain" 
            imgSrc={require('../../assets/mountain.jpg')}
            score={10}
        />
    </View>;
};

const style = StyleSheet.create({});

export default ImageScreen;