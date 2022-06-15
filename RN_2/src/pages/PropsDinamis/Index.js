import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Story = (props) => {
    return (
        <View style={{ alignItems:'center', marginRight: 20}}>
             <Image
            source={{
                uri: props.gambar
            }}
            style={{ width: 70, height: 70, borderRadius: 70/2}} />
            <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row'}}>
                <Story 
                judul= 'Youtube Channel' 
                gambar='https://i.pinimg.com/564x/96/a0/08/96a008ca53d17f8fa2b51bc57c6be3d7.jpg' />
                <Story judul= 'Instagram'
                gambar= 'https://i.pinimg.com/564x/36/41/19/364119ff1e0cbfcb810e238c7414e2fb.jpg'/>
                <Story judul= 'Twitter'
                gambar= 'https://i.pinimg.com/564x/a3/33/f4/a333f4fa6e75968a62a6f00bf85cac8c.jpg'/>
                <Story judul= 'Telegram'
                gambar= 'https://i.pinimg.com/564x/a3/33/f4/a333f4fa6e75968a62a6f00bf85cac8c.jpg'/>
                <Story judul= 'Path'
                gambar= 'https://i.pinimg.com/564x/a3/33/f4/a333f4fa6e75968a62a6f00bf85cac8c.jpg'/>
                <Story judul= 'Facebook'
                gambar= 'https://i.pinimg.com/564x/a3/33/f4/a333f4fa6e75968a62a6f00bf85cac8c.jpg'/>
                <Story judul= 'Whatsapp'
                gambar= 'https://i.pinimg.com/564x/a3/33/f4/a333f4fa6e75968a62a6f00bf85cac8c.jpg'/>
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis

const styles = StyleSheet.create({})