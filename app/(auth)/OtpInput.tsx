import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {OtpInput} from "react-native-otp-entry"
// import { CreatingContext } from './sign-up'
import Toast from 'react-native-toast-message';
import { Image } from 'react-native'
import { CreatingContext } from '@/components/CreatyConPage'
import { useSignUp } from '@clerk/clerk-expo'
import { router } from 'expo-router'
// useContext
let GlobalValue = 2
const TheOtpInput = () => {
    // const Contexting(CreatingContext)
    const [code, setcode] = useState("")
    const [CountDown, setCountDown] = useState(30)
    const [AgainSend, setAgainSend] = useState(false)
    const [VerifyText, setVerifyText] = useState("Verify")
    // console.log('the  (() => {
    
    useEffect(() => {    
        const MakeHime = ()=>{
          let out  = setInterval(() => {
            if(AgainSend==true){
              GlobalValue =GlobalValue-1
              setCountDown(GlobalValue)
              console.log("the Set Count " , GlobalValue)
              // setAgainSend(false)
              if(GlobalValue<=0){
                setAgainSend(false)
                clearInterval(out)
                setVerifyText("Click To Verify Again")
                console.log("the Value we have is " , )
                GlobalValue=30
    
              }
            }
          }, 1000);

        }
        MakeHime()
        // clearInterval(out)
    }, [AgainSend==true])
    const { isLoaded, signUp, setActive } = useSignUp()
    const HimVerifyPress = async () => {
      console.log(
        "the Verify Press Function is called "
      )
      if (!isLoaded) return
  
      try {
        // Use the code the user provided to attempt verification
        const signUpAttempt = await signUp.attemptEmailAddressVerification({
          code,
        })
  
        // If verification was completed, set the session to active
        // and redirect the user
        if (signUpAttempt.status === 'complete') {
          await setActive({ session: signUpAttempt.createdSessionId })
          console.log("the Done ")
          Toast.show({type:"success",text1:"You are Successfully Signed In"})
          router.replace('/(root)/(tabs)/booking')
        } else {
          // If the status is not complete, check why. User may need to
          // complete further steps.
          console.error(JSON.stringify(signUpAttempt, null, 2))
        }
      } catch (err) {
        console.log("the rror is " , err)
        // See https://clerk.com/docs/custom-flows/error-handling

        Toast.show({type:"error",text1:`${err}`})
        // for more info on error handling
        console.error(err)
      }
    }
  
    
    // console.log("the Value of code is ")
  return (
    <View className='flex flex-col mx-1 mt-10 gap-8 '>
      <Image source={require("@/assets/Images/otp_plane.png")} style={{width:200,height:200}} className='self-center'/>
      <View className='flex flex-col'>
      <Text className='font-bold text-xl self-center'>Enter OTP</Text>
      <Text className='text-gray-600 ml-10'>Verify Your Email we just send on Email You Entered</Text>
      </View>
        <View className=''>

        <OtpInput numberOfDigits={6} theme={{
          containerStyle:{borderColor:"#ec441e"  , display:"flex", flexDirection:"row",justifyContent:"space-between",overflow:"hidden",} , 
          pinCodeContainerStyle:{borderBottomColor:"black",borderRadius:"2",borderWidth:0,borderBottomWidth:1} , focusedPinCodeContainerStyle:{borderBottomColor:"#ec441e",borderBottomWidth:2}
        }}  onTextChange={(e)=>{
          setcode(e)
          // console.log("the Value I am getting in the Otp Input" , )
        }}
          type='numeric'
          >
        </OtpInput>
            </View>
        <View className=' flex flex-col gap-4'>
        {/* <Pressable onPress={onVerifyPress}><Text>Let's Click Again</Text></Pressable> */}
          <TouchableOpacity onPress={async ()=>await HimVerifyPress()}    className=' px-2 py-3 flex flex-row justify-center bg-[#ec441e]'>
            <Text className='text-white font-bold text-xl'> {VerifyText}</Text>
          </TouchableOpacity>
        <Text className='self-center text-gray-500'>Resend In {CountDown}s</Text>
        </View>

    </View>
  )
}

export default TheOtpInput