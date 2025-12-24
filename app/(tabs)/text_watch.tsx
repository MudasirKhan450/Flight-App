import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Stack, Tabs, useLocalSearchParams, usePathname } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { useLocalSearchParams, usePathname, useSearchParams } from 'expo-router/build/hooks'

const TextWatchPage = () => {
const pathName = usePathname()
const Params = useLocalSearchParams()
  const query = new URLSearchParams(Params).toString().replaceAll("+"," ").replace("=","").toLocaleLowerCase()
  console.log(query)
  return (
        <ScrollView className='mt-2'>
          <SafeAreaView>
            <View className=' w-full h-full pl-4 pr-4 border-2 border-black '>
              <Text className='font-semibold mr-2 ml-4 text-xl text-[#292f47]  '>{query}</Text>
            </View>
          </SafeAreaView>
        </ScrollView>
  )
}

export default TextWatchPage