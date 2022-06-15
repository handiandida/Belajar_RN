import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Cart from '../../assets/icons/cart.png'

const PositionReactNative = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Materi Position</Text>
            <View style={styles.cartWrapper}>
                <Image source={Cart} style={styles.iconCart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <View>
                <Text style={styles.text}>Keranjang Belanja Anda</Text>
            </View>
        </View>
    )
}

export default PositionReactNative

const styles = StyleSheet.create({
    wrapper : {
        padding: 20,
        alignItems: 'center'
    },
    cartWrapper : {
        borderWidth: 1,
        borderColor: 'lightblue',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 40
    },
    iconCart : {
        width: 50,
        height: 50,
    },
    text : {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 10
    },
    notif : {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 5,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
