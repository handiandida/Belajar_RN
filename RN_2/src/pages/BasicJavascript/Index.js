import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BasicJavascript = () => {
    
    // primitive
    const nama = 'Dida Handian'
    let usia = 24
    const apakahLakilaki = true

    //complex
    const hewanPeliharaan = {
        nama : 'pol',
        jenis : 'kucing',
        usia: '2',
        apakahHewanLokal: false,
        warna: 'bulao',
        orangTua: {
            jantan: 'Persia',
            betina: 'Romawi',
        }
    } //Object

    const sapaOrang = (name, age) => {
        return console.log(`Hello ${name} usia and ${age}`)
    } //function

    const namaOrang = 
    ['Dida', 
    'Handian', 
    'Tampan',
    'Babeh',
    'Doyen',
    'Imam'
    ] // Object - array

    typeof namaOrang //Object

    // if(hewanPeliharaan.nama === 'Pol') {
    //     console.log('Hello Pol')
    // } else {
    //     console.log('Hewan siapa ini?')
    // }

    const sapaHewan = objectHewan => {
        // let hasilSapa =  ''
        // if(objectHewan.nama === 'pol') {
        //     hasilSapa = 'Hallo Pol, apa kabar?'
        // } else {
        //     hasilSapa = 'Ini hewan siapa?'
        // }
        // return hasilSapa

        return objectHewan.nama === 'pol'
        ? 'Hallo pol, apa kabar?'
        : 'Ini hewan siapa ?'
    }

    sapaOrang('Dida Handian', 24)

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Materi Basic Javascript di React Native
            </Text>
            <Text>{sapaHewan(hewanPeliharaan)}</Text>
            <Text>{namaOrang[0]}</Text>
            <Text>{namaOrang[1]}</Text>
            <Text>{namaOrang[2]}</Text>
            <Text>==============</Text>
            {namaOrang.map(orang => (
                <Text>{orang}</Text>
            ))}
        </View>
    )
}

export default BasicJavascript

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center'
    }
})