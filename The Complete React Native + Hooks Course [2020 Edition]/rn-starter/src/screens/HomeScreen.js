import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation: { navigate }}) => {
  return <View>
            <Text style={styles.text}>Hi André!</Text>
            <Button 
                title="Go to Components Demo"
                onPress={() => navigate('Components')}
              />
            <Button 
              title="Go to list demo"
              onPress={() => navigate('List')} />
            <Button 
              title="Go to image list"
              onPress={() => navigate('ImageList')} />  
            <Button 
              title="Go to counter demo"
              onPress={() => navigate('Counter')} />  

            <Button 
              title="Go to colors demo"
              onPress={() => navigate('Colors')} />  

            <Button 
              title="Go to squares demo"
              onPress={() => navigate('Squares')} />  

            <Button 
              title="Go to text demo"
              onPress={() => navigate('Text')} />  

            <Button 
              title="Go to boxes demo"
              onPress={() => navigate('Boxes')} />  
        </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
