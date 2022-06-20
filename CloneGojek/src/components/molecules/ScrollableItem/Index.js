import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const ScrollableItem = (props) => {
    return(
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150}}>
                <Image source={props.img} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color:'#1C1C1C', marginTop: 12}}>{props.title}</Text>
        </View>
    )
}

export default ScrollableItem