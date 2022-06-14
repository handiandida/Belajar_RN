import React from "react";
import { View, Text, Button } from "react-native";

const Detail = ( {route} ) => {
    const {counter} = route.params
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <Text>Detail View</Text>
            <Text style={{ fontSize: 20}}>Counter Value is - {counter}</Text>
        </View>
    )
}

export default Detail