import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/InputField'
import { Link } from 'expo-router'

const SignUpPage = () => {
  const [FormValues, setFormValues] = useState({email:"",password:"",})
  // console.log(FormValues)

  return (
    <View className='flex flex-col  gap-10'>
      <Image source={require("@/assets/Images/flight2.jpg")} 
      style={{width:"100%",height:250}}
      />
      <View className='self-center'>
        <Text className='font-bold thecolor text-xl'>Sign In</Text>
        <Text className='text-[16px] text-gray-700 '>Thanks for Revisting</Text>
      </View>
      <View className='flex flex-col mx-2 gap-6 py-2'>
      <InputField classNames='' values={FormValues.email} onchangeText={(e)=>setFormValues({...FormValues,email:e})}
        yes_or_not={false} label='Email' placeholder='Enter Your Email'
      />
      <InputField classNames='' values={FormValues.email} onchangeText={(e)=>setFormValues({...FormValues,password:e})}
        yes_or_not={true} label='Password' placeholder='Enter Your Password'
      />
      <View className='flex flex-col gap-4'>

        <TouchableOpacity className='border mx-2 bg-[#ec441e]   py-2 px-3'>
          <Text className='text-white text-center font-semibold text-[17px]'>Sign In</Text>
        </TouchableOpacity>
        <Text className='self-center relative text-gray-600 '>Or</Text>
        {/* <TouchableOpacity className='border mx-2 bg-[white] flex flex-row items-center justify-normal gap-4 py-2 px-10'>
          <Image source={require("@/assets/Images/google.webp")} style={{width:32,height:32}}/>
          <Text className='text-black text-center font-semibold text-[17px]'>Continue with Google</Text>
        </TouchableOpacity> */}
        <View className='flex flex-row justify-center'>
            <Text className='text-gray-700 text-[17px]'>Don't Have an Account </Text>
          <Link href={"/(auth)/sign-up"}>
            <Text className='text-blue-500  text-[17px]'>Sign Up</Text>
          </Link>
          </View>
      </View>
      </View>
    </View>
  )
}

export default SignUpPage