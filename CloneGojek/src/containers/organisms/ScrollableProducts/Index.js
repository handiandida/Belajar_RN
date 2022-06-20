import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView} from 'react-native'
import ScrollableItem from '../../../components/molecules/ScrollableItem/Index'

class ScrollableProducts extends Component {
    render() {
        return (
            <View>
                <View style={{height: 15, width: 55, marginLeft: 14}}>
                <Image source={require('../../../assets/logo/go-food.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
                <Text style={{fontSize: 17, fontWeight: 'bold', color:'#1C1C1C'}}>Nearby Restaurant</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', color:'#61A756'}}>See All</Text>
                </View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
                    <ScrollableItem title="KFC" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                    <ScrollableItem title="Bakmi GM" img={require('../../../assets/dummy/go-food-gm.jpg')} />
                    <ScrollableItem title="Martabak Orins" img={require('../../../assets/dummy/go-food-orins.jpg')} />
                    <ScrollableItem title="Martabak Banka" img={require('../../../assets/dummy/go-food-banka.jpg')} />
                    <ScrollableItem title="Ayam Bakar Pak Boss" img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
                </ScrollView>
                <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20, marginTop: 16,marginHorizontal: 16}}></View>
            </View>
        )
    }
}

export default ScrollableProducts