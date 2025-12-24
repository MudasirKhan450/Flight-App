import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Offers from '@/components/Offers'
import { Link, router } from 'expo-router'
import TheNews from '@/components/TheNews'

const index = () => {

  return (
      <SafeAreaView className='flex flex-col'>
       <View className='flex flex-row bg-[#ec441e] items-center w-full justify-center' >
        <Image source={require("@/assets/Images/mylogo.png")} style={{width:150,height:150}}/>
        {/* <Text className='text-[#ec441e] text-2xl'>Planeo</Text> */}
        </View>
        <ScrollView className='flex flex-col w-full h-screen px-2  '>
        <View className='flex flex-col  mb-2'>

        <View className='flex flex-row justify-between'>
          <Text className='font-bold text-2xl text-[#ec441e]'>News</Text>
          <TouchableOpacity onPress={()=>router.push("/News")} className='text-[#ec441e]'>see all</TouchableOpacity>
        </View>
          <TheNews image={require("@/assets/Images/terorr.jpeg")} description='due to terrorist attack on the plane we will be late so be calm and rest till next morning ' title='Terrorist Attack' />
          <TheNews image={require("@/assets/Images/delay.jpeg")} description='passengers had some problem in lahore therefor we have to do something ' title='Lahore Flight Delayed ' />
        </View>
         {/* 3 more then  */}
         <View className='flex flex-col'>

         <View className='flex flex-row justify-between'>
         <Text className='font-bold text-2xl text-[#ec441e]'>Offers</Text>
         <TouchableOpacity onPress={()=>router.push("/OfferMain")} className='text-[#ec441e]'>see all</TouchableOpacity>
         </View>
         <Offers image={require("@/assets/Images/planeo1.png")}
         title='Dehli to Quetta' description='just on cash of 3000 with out fees which we dont need here of dehli to lahore also free' />
        <Offers image={require("@/assets/Images/planeo1.png")}
         title='Dehli to Quetta' description='just on cash of 3000 with out fees which we dont need here of dehli to lahore also free' />
         </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default index