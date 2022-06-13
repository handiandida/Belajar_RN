import React from "react";
import { View, Text, Button } from "react-native";

const Detail = ( {navigation} ) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <Text>Detail View</Text>
            <Button onPress={() => navigation.navigate('Home')} title='Next Screen'></Button>
        </View>
    )
}

export default Detail