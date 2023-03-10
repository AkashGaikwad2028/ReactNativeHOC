import React from 'react'
import {View,Text} from "react-native"
import Hoc, { HocFunctionalComponent1 } from './src/Hoc'
import { HocFunctionalComponent } from './src/Hoc'

export default function App() {
  return (
  <View>
   <Text>HOC COMPONENT</Text>
   <Hoc/>
   <HocFunctionalComponent/>
   <HocFunctionalComponent1/>
  </View>
  )  
}
