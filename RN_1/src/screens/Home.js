import React from "react";
import { View, Text, Button } from "react-native";

const Home = ( {navigation} ) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <Text>Home View</Text>
            <Button onPress={() => navigation.navigate('Detail')} title='Next Screen'></Button>
        </View>
    )
}

export default Home