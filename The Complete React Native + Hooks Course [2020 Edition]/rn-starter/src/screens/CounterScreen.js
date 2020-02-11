import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {...state, count: state.count + action.payload};
        case 'DECREASE_COUNT':
            return {...state, count: state.count + action.payload};
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return <View>
        <Button title="Increase" onPress={() => dispatch({ type: 'INCREASE_COUNT', payload: 1})}/>
        <Button title="Decrease" onPress={() => dispatch({ type: 'DECREASE_COUNT', payload: -1})}/>
        <Text>Current count is: {state.count}</Text>
    </View>;
};

const style = StyleSheet.create({});

export default CounterScreen;