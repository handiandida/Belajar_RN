import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Operan = ( {navigation} ) => {
    const [ counter, setCounter] = useState(0)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <Button onPress={() => setCounter(counter + 1)} title={'Plus'}></Button>
            <Button onPress={() => setCounter(counter - 1)}title={'Minus'}></Button>
            <Text>Value is - {counter}</Text>
            <Button onPress={() => navigation.navigate('Detail', {counter})} title={'Pass Value on Detail'}></Button>
        </View>
    )
}

export default Operan