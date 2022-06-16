import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LatihanSvg from '../../assets/images/latihanSvg.svg'

const ReactNativeSvg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Materi Menggunkan File SVG didlam React Native
            </Text>
            <LatihanSvg width={244} height={125}/>
        </View>
    )
}

export default ReactNativeSvg

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center'
    }
})