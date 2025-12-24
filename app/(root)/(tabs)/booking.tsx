import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {ReactNativeModal} from  "react-native-modal"
import { router } from 'expo-router'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlightInput from '@/components/FlightInput'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const booking = () => {
  const [SignedOrNot, setSignedOrNot] = useState(false)
  const {user}  = useUser()
  const { isSignedIn } = useAuth();
  return (
    <View>

      {/* REact Native Modells  */}
        <ReactNativeModal isVisible={!isSignedIn}>
          <View className='flex flex-col bg-white rounded-2xl px-2 py-2'>
            <Text className='text-xl font-bold text1'>Sign In To Access Booking</Text>
            <Image source={require("@/assets/Images/banned.png")} className='self-center' style={{width:200,height:200}}/>
            <TouchableOpacity onPress={()=>{setSignedOrNot(true)
              router.push("/(auth)/sign-up")
            }} className='bg-[#ec441e] rounded-full py-2 px-4 text-white font-bold  self-center'>Sign up</TouchableOpacity>
          </View>
        </ReactNativeModal>
        <SafeAreaView className=''>
          <View className='flex flex-col'>
            <Text className='text-xl font-bold self-center'>Flight Ticket Booking</Text>
            <FlightInput icons={<MaterialIcons name="flight-takeoff" size={24} color="black" />} text='From'/>
            <FlightInput icons={<MaterialIcons name="flight-takeoff" size={24} color="black" />} text='To'/>
          </View>
        </SafeAreaView>
    </View>
  )
}

export default booking