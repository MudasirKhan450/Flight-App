import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const FlightInput = ({icons,text}:{icons:React.ReactNode,text:string,}) => {
    const [first, setfirst] = useState(true)
  return (
    <View className='flex flex-col gap-1  '>
    <Text className='text-black'>{text}</Text>
    {
      first ? 

      <View className='flex flex-row items-center gap-3 border border-gray-600'>
      {icons}  
        <Pressable onPress={()=>setfirst(false)}>
        <Text className='text-black font-bold '>Dehlit</Text>
        <Text className='text-gray-600 font-light text-[12px]'>Gujranvalla Airport</Text>
        </Pressable>
      
    </View> : <View className='flex flex-row  items-center gap-3 border '>
      <TextInput placeholder='Quetta ' className='text-[15px] px-1 w-full py-2 placeholder:text-gray-700'></TextInput>

    </View>
}
    </View>
  )
}

export default FlightInput