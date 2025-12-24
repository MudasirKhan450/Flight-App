import { View, Text, Image } from 'react-native'
import React from 'react'

const TheNews = ({image,description,title}:{image:any,description:string,title:string}) => {
  return (
    <View className='flex flex-col mx-1 mt-1'>
        <Text className='font-extrabold text-xl'>{title}</Text>
        <View className=' w-full'>

        <Image source={image} className=' object-cover object-top' style={{width:"100%" , height:200,}}  resizeMode='cover' />
        </View>
        <Text className='font-light'>{description}</Text>

    </View>
  )
}

export default TheNews