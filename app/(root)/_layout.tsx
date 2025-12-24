import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Rootlayout = () => {
  return (
        <Stack>
            <Stack.Screen name='(tabs)'  options={{headerShown:false , title:"hello"}}/>
            {/* <Stack.Screen name='sign-up' options={{headerShown:false}}/> */}
        </Stack>
  )
}

export default Rootlayout