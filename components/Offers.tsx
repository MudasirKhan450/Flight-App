import { View, Text, Image } from 'react-native'
import React from 'react'

const Offers = ({image,description,title}:{image:any,description:string,title:string}) => {
  return (
    <View className='flex flex-row h-[300px]  gap-4 z-50 shadows border-4 rounded-2xl mt-2 mb-1 border-slate-300'>
        <View>
            <Image source={image} style={{width:200,height:200}}/>
        </View>
        <View className='flex flex-col  w-[200px]'>
            <Text className='font-bold text-2xl'>{title}</Text>
            <Text className='text-[#c9c9c9] text-[18px] text-justify'>{description}</Text>
        </View>
    </View>
  )
}

export default Offers