import React from "react";
import { View, Text, Image } from "react-native";
import { welcomeAuth } from "../../assets";
import { colors } from "../../utils";
import ActionButton from "./ActionButton";

const WelcomeAuth = ({navigation}) => {
    const handleGoto = screen => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuth} style={styles.wrapper.illustration}/>
            <Text style={styles.text}>Selamat Datang di O-JOL</Text>
            <ActionButton 
            desc="Silahkan masuk, jika anda sudah memiliki akun" 
            title="Masuk"
            onPress={() => handleGoto('Login')}
             />
            <ActionButton 
            desc="atau silahakan daftar jika anda belum meiliki akun" 
            title="Daftar"
            onPress={() => handleGoto('Register')}
            />
        </View>
    )
}

const styles = {
    wrapper: {
        page : {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white'
        },
        illustration: {
            width: 219,
            height: 117,
            marginBottom: 10
        },
    },
    text : {
        flexBasis: 18,
        fontWeight: 'bold',
        color: colors.default,
        marginBottom: 76
    }
}


export default WelcomeAuth