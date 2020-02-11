import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const STEP = 15;

const getColorValue = (colorValue, amount) => colorValue + amount > 255 || colorValue + amount < 0 ? colorValue : colorValue + amount;

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_RED':
            return {...state, red: getColorValue(state.red, action.payload)}
        case 'CHANGE_GREEN':
            return {...state, green: getColorValue(state.green, action.payload)}
        case 'CHANGE_BLUE':
            return {...state, blue: getColorValue(state.blue, action.payload)}
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});

    return <View>
        <ColorCounter 
            color="Red"
            onIncrease={() => dispatch({ type: 'CHANGE_RED', payload: STEP })}
            onDecrease={() => dispatch({ type: 'CHANGE_RED', payload: -STEP })}
        />
        <ColorCounter 
            color="Green"
            onIncrease={() => dispatch({ type: 'CHANGE_GREEN', payload: STEP })}
            onDecrease={() => dispatch({ type: 'CHANGE_GREEN', payload: -STEP })}
        />
        <ColorCounter 
            color="Blue"
            onIncrease={() => dispatch({ type: 'CHANGE_BLUE', payload: STEP })}
            onDecrease={() => dispatch({ type: 'CHANGE_BLUE', payload: -STEP })}
        />
        <View style={ { height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` } }/>
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;