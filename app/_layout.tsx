import { View, Text } from 'react-native'
import React, { Component } from 'react'
import Collapsible from 'react-native-collapsible';
import { Stack, Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import "./globals.css"

const _layout = () => {
  const IconFunction = ({focused,component }:{focused:boolean,component:any })=>{
    if(focused){
      return <View className='rounded-full bg-[black] p-3 '>
        {component}
      </View>
    }
    else{
      return <View className='rounded-full bg-white p-3 m-2  '>
          {component}
      </View>
    }
  }
  return (
      <Tabs screenOptions={{headerShown:false, tabBarStyle:{bottom:15 , backgroundColor:"#1a1f32" , height:"7%" ,paddingTop:20,paddingBottom:30 , width:"100%",margin:2}}}>

        <Tabs.Screen name='index' options={{headerShown:false , title:"", tabBarIcon:({color,focused})=><IconFunction focused={focused} component={<AntDesign name="line-chart" size={36} color={color} /> } />}}  ></Tabs.Screen>
        <Tabs.Screen name='(tabs)' options={{headerShown:false, href:null , title:"",}} ></Tabs.Screen>
        <Tabs.Screen name='scan' options={{headerShown:false , title:"", tabBarIcon:({color,focused})=><IconFunction focused={focused} component={<MaterialCommunityIcons name="line-scan" size={36} color={color} />} />}}  ></Tabs.Screen>
        <Tabs.Screen name='profile' options={{headerShown:false , title:"", tabBarIcon:({color,focused})=><IconFunction focused={focused} component={<FontAwesome5 name="user" size={36} color={color} />} />}}  ></Tabs.Screen>
        <Tabs.Screen name='add' options={{headerShown:false , title:"", tabBarIcon:({color,focused})=><IconFunction focused={focused} component={<AntDesign name="edit" size={36} color={color} />} />}}  ></Tabs.Screen>
        {/* <Tabs.Screen name='scan' options={{headerShown:false , title:"", tabBarIcon:({color,focused})=><IconFunction focused={focused} component={<FontAwesome5 name="user" size={36} color="black" />}></IconFunction>></Tabs.Screen> */}

      </Tabs>
  )
}

export default _layout