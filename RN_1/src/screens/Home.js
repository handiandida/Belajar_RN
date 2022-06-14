import React, { useContext, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
// import AppContext from "../context/AppContext";


const Home = ({ navigation }) => {
    console.log(AppContext)
    // const { counter, setCounter } = useContext(AppContext)
    const [text, setText] = useState('')
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <TextInput style={{ borderColor: 'lightgray', borderWidth: 1, width: '80%', height: 50}}
            onChangeText={(value) => setText(value)}></TextInput>
            {/* <Button onPress={() => setCounter(text)} title={'Update Value in Context'}></Button> */}
            <Button onPress={() => navigation.navigate('ClassA')} title={'Screen Stack A'}></Button>
            <Button onPress={() => navigation.navigate('ClassE')} title={'Screen Stack E'}></Button>
        </View>
    )
}

export default Home