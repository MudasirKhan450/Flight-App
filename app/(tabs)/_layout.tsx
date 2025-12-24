import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
    <Tabs.Screen name='text_watch' options={{href:null , headerShown:false}}></Tabs.Screen>
  </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})