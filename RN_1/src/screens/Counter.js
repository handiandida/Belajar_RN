import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Counter = ( {navigation} ) => {
    const [ counter, setCounter] = useState(0)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <Button onPress={() => setCounter(counter + 1)} title={'Plus'}></Button>
            <Button onPress={() => setCounter(counter - 1)}title={'Minus'}></Button>
            <Text>Value is - {counter}</Text>
        </View>
    )
}

export default Counter