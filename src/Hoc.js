import React from 'react'
import {View,Text} from "react-native"
export default function Hoc() {
  return (
    <View>
        <Text>This Is Sampel Hoc</Text>
    </View>
  )
}


const hocfunction=(Component)=>{
    return ((props)=>(
        <View style={{backgroundColor:"red",padding:50,marginTop:10}}>
            <Component {...props}/>
        </View>
    ))
}

const hocfunction1=(Component)=>{
    return ((props)=>(
        <View style={{backgroundColor:"yellow",padding:50,marginTop:10}}>
            <Component {...props}/>
        </View>
    ))
}

const HocFunctionalComponent = hocfunction(Hoc)

const HocFunctionalComponent1 = hocfunction1(Hoc)

export {HocFunctionalComponent,HocFunctionalComponent1}