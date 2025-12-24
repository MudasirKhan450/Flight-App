import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import InputField from '@/components/InputField'
import { Link, useRouter } from 'expo-router'
import { useSignUp } from '@clerk/clerk-expo'
import { CreatingContext } from '@/components/CreatyConPage'
// import {  LoaderKitView,} from 'react-native-loader-kit';

// export const CreatingContext =createContext<{funco:()=>void,setcode:Dispatch<SetStateAction<string>>,cody:string}>({funco:()=>{},setcode:()=>{},cody:""})

const SignUpPage = () => {
  const [FormValues, setFormValues] = useState({name:"",email:"",password:"",})
  // console.log(FormValues)
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()
  // const UsingIt = useContext(0)
  // const [emailAddress, setEmailAddress] = React.useState('')
  // const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  // const [code, setCode] = React.useState('what')
  const {setcode,setonVerifyPress , cody}  =  useContext(CreatingContext)
  const [VerifyP, setVerifyP] = useState(false)
  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return

    // console.log(emailAddress, password)

    // Start sign-up process using email and password provided
    try {
      setVerifyP(true)
      await signUp.create({
        emailAddress:FormValues.email,
        password:FormValues.password,
        // firstName:FormValues.name,
      })
      console.log("the First step 1")

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      console.log("the second step 2")
      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      console.log("Done Or Not ")
      setPendingVerification(true)
      router.push("/(auth)/OtpInput")
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      console.log("the third step 3")
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
    finally{
      setVerifyP(false)
    }
  }

  // const HimVerifyPress = async () => {
  //   console.log(
  //     "the Verify Press Function is called "
  //   )
  //   if (!isLoaded) return

  //   try {
  //     // Use the code the user provided to attempt verification
  //     const signUpAttempt = await signUp.attemptEmailAddressVerification({
  //       code:cody,
  //     })

  //     // If verification was completed, set the session to active
  //     // and redirect the user
  //     if (signUpAttempt.status === 'complete') {
  //       await setActive({ session: signUpAttempt.createdSessionId })
  //       router.replace('/(root)/(tabs)/booking')
  //     } else {
  //       // If the status is not complete, check why. User may need to
  //       // complete further steps.
  //       console.error(JSON.stringify(signUpAttempt, null, 2))
  //     }
  //   } catch (err) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2))
  //   }

  // }
  // useEffect(() => {
  //   setonVerifyPress(() => HimVerifyPress());
  // }, [HimVerifyPress, setonVerifyPress]);
  // useEffect
  // setonVerifyPress(()=>HimVerifyPress())
  return (

    <View className='flex flex-col  gap-6'>
      <Image source={require("@/assets/Images/flight2.jpg")} 
      style={{width:"100%",height:250}}
      />
      <View className='self-center'>
        <Text className='font-bold thecolor text-xl'>Sign Up</Text>
        <Text className='text-[16px] text-gray-700 '>Welcome to Planeo</Text>
      </View>
      <View className='flex flex-col mx-2 gap-6 py-2'>
      <InputField classNames='' values={FormValues.name} onchangeText={(e)=>setFormValues({...FormValues,name:e})}
        yes_or_not={false} label='Name' placeholder='Enter Your Name'
      />
      <InputField classNames='' values={FormValues.email} onchangeText={(e)=>setFormValues({...FormValues,email:e})}
        yes_or_not={false} label='Email' placeholder='Enter Your Email'
      />
      <InputField classNames='' values={FormValues.email} onchangeText={(e)=>setFormValues({...FormValues,password:e})}
        yes_or_not={true} label='Password' placeholder='Enter Your Password'
      />
      <View className='flex flex-col gap-4'>

        <TouchableOpacity className='border mx-2 bg-[#ec441e]   py-3 px-3' onPress={onSignUpPress} disabled={VerifyP}>
          {
            VerifyP ? (
                <ActivityIndicator color={"white"} size={24} className='' ></ActivityIndicator>
            ) : (

              <Text className='text-white text-center font-semibold text-[17px]'>Sign Up</Text>
            )
          }
        </TouchableOpacity>
        <Text className='self-center relative text-gray-600 '>Or</Text>
        <TouchableOpacity className='border mx-2 bg-[white] flex flex-row items-center justify-normal gap-4 py-2 px-10'>
          <Image source={require("@/assets/Images/google.webp")} style={{width:32,height:32}}/>
          <Text className='text-black text-center font-semibold text-[17px]'>Continue with Google</Text>
        </TouchableOpacity>
        <View className='flex flex-row justify-center'>
            <Text className='text-gray-700'>Already have an account </Text>
          <Link href={"/(auth)/sign-in"}>
            <Text className='text-blue-500'>Sign In</Text>
          </Link>
          </View>
      </View>
      </View>
    </View>
      // </CreatingContext.Provider>
  )
}

export default SignUpPage