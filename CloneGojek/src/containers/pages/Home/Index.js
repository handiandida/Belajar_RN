import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'

import SearchFeature from '../../../components/molecules/SearchFeature/Index'
import HomeGoPay from '../../organisms/HomeGoPay/Index'
import HomeMainFeature from '../../organisms/HomeMainFeature/Index'
import GoNews from '../../../components/molecules/GoNews/Index'
import GoInfo from '../../../components/molecules/GoInfo/Index'
import GoBanner from '../../../components/molecules/GoBanner/Index'
import NavBar from '../../organisms/NavBar/Index'
import ScrollableProducts from '../../organisms/ScrollableProducts/Index'

const Home = ({ navigation }) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                    <SearchFeature />
                    <HomeGoPay />
                    <HomeMainFeature />
                    <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
                    <GoNews onPress={() => navigation.navigate('NewsDetail')}/>
                    <GoInfo />
                    <GoBanner />
                    <ScrollableProducts />
                    </ScrollView>
                <NavBar />
                </View>
            </View>
        )
}

export default Home