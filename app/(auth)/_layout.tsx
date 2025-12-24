import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider } from '@/components/CreatyConPage'

const Rootlayout = () => {
  return (
        <AuthProvider>
        <Stack>
            <Stack.Screen name='sign-in' options={{headerShown:false}}/>
            <Stack.Screen name='sign-up' options={{headerShown:false}}/>
            <Stack.Screen name='OtpInput' options={{headerShown:false}}/>
        </Stack>
        </AuthProvider>
  )
}

export default Rootlayout