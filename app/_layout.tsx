import "./globals.css"
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ClerkProvider } from '@clerk/clerk-expo'
// import { TokenCache } from "@clerk/clerk-expo"
import {tokenCache} from  "@clerk/clerk-expo/token-cache"

const Rootlayout = () => {
  return (
      <ClerkProvider tokenCache={tokenCache}>
      <Stack>
        <Stack.Screen name='(auth)' options={{headerShown:false}}/>
        <Stack.Screen name='(root)' options={{headerShown:false}}/>
        {/* <Stack.Screen name='nextStep/' options={{headerShown:false}}/> */}
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='News' options={{headerShown:false}}/>
        <Stack.Screen name='+not-found' options={{headerShown:false}}/>
        <Stack.Screen name='OfferMain' options={{headerShown:false}}/>
      </Stack>
      </ClerkProvider>
  )
}

export default Rootlayout