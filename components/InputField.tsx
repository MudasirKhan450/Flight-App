import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputField = ({label,placeholder,classNames, yes_or_not , onchangeText}:{values:string, onchangeText:(text:string)=>void , 
  yes_or_not:boolean,label:string,placeholder:string,classNames:string | undefined}) => {
    // console.log(classNames)
  return (
    <View className={`flex flex-col gap-2 ${classNames}`}>
        <Text className='text-xl font-semibold'>{label}</Text>
        <TextInput className={`rounded-xl border-gray-600 placeholder:text-gray-700 w-full px-1 focus:outline-none h-[5vh] border`} 
        secureTextEntry={yes_or_not}   placeholder={placeholder} onChangeText={(e)=>onchangeText(e)}></TextInput>
    </View>
  )
}

export default InputField