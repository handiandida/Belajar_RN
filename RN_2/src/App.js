import React, { Component, useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'

import SampleComponent from './pages/SampleComponents/Index'
import StylingReactNativeComponent from './pages/StylingComponents/Index'
import MateriFLexbox from './pages/Flexbox/Index'
import PositionReactNative from './pages/Position/Index'
import PropsDinamis from './pages/PropsDinamis/Index'
import StateDinamis from './pages/StateDinamis/Index'
import Communication from './pages/Communication/Index'

const App = () => {
  const [isShow, SetIsShow] = useState(true)
  useEffect(() => {
    setTimeout(() =>{
      SetIsShow(false)
    }, 6000)
  }, [])
    return (
      <View>
        <ScrollView>
          {/* <SampleComponent /> */}
          {/* <StylingReactNativeComponent /> */}
          {/* <PositionReactNative /> */}
          {/* <MateriFLexbox /> */}
          {/* {isShow && <MateriFLexbox />} */}
          {/* <PropsDinamis /> */}
          {/* <StateDinamis /> */}
          <Communication />
        </ScrollView>
      </View>
    )
}

export default App
