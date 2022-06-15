import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CartComponent from "../../components/Cart/Index";
import ProductComponent from "../../components/Product/Index";

const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0)
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Komunikasi Antar Component</Text>
            <ProductComponent onButtonPress={() => setTotalProduct(totalProduct + 1)}/>
            <CartComponent quantity={totalProduct} />
        </View>
    )
}

export default Communication

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle :{
        textAlign: 'center'
    }
})