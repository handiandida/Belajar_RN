import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Gambar from '../../assets/images/gambar.jpg'

const ProductComponent = (props) => {
    return (
        <View>
            <View 
            style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 2,
            borderColor: 'blue',
            marginTop: 20,
            marginLeft: 20
            }}>
            </View>
            <View style={{ padding: 12, backgroundColor: 'lightgrey', width: 225, marginTop: 20, marginLeft: 20 }}>
            <Image style={{ width: 200, height: 120, borderRadius: 10}} source={Gambar}></Image>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 15}}>
                Ini adalah sicantik
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12, color: 'orange'}}>
                Yang bernama Napasorn
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500', marginTop: 12 }}>
                Thailand
            </Text>
            <TouchableOpacity onPress={props.onButtonPress}>
            <View style={{
                backgroundColor: 'lightgreen',
                paddingVertical: 6,
                borderRadius: 20,
                marginTop: 20
            }}>
                <Text style={{
                fontSize: 14,
                fontWeight: '700',
                color: 'white',
                textAlign: 'center'
                }}>
                Lihat
                </Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductComponent

const styles = StyleSheet.create({
    // wrapper : {
    //     padding: 12,
    //     backgroundColor: 'white',
    //     width: 212,
    //     borderRadius: 8
    // }
})