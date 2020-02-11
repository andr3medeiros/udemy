import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return <View>
        <Text>Enter password:</Text>
        <TextInput 
            textContentType="password"
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={text => setPassword(text)}
        />
        {password.length < 5 ? <Text>Please enter 5 characters or more</Text> : null}
    </View>;
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;