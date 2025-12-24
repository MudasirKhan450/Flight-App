import React, { useEffect, useRef, useState } from 'react';
import { Image, ImageBackground, Linking, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import logo2 from "../assets/logo3.jpg";
import { createWorker } from 'tesseract.js';


import Feather from '@expo/vector-icons/Feather';
import { Video } from 'expo-av';
import { ReactNativeModal } from "react-native-modal";
import scan2 from "../assets/scan2.mp4";
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toast } from 'toastify-react-native';
import { router } from 'expo-router';
import ScanedText from '@/components/ScanedText';
// import react
// import Toast from 'react-native-toast-message';




/* New Todo 
*  the working of the camera should be done after that use the google text extractor for these 
* and after that make a clerk account and save the user data in backend.
*/ 
const ScannerPage = () => {
// import { Linking, Platform } from "react-native";
// const TheRouter = router.p
// const [first, setfirst] = useState(second)
const CamerRef = useRef<any | null >(null)
// const ImageRecognizer = async () => {
//   const worker = await createWorker('eng');
//   const ret = await worker.recognize(file);
//   console.log(ret.data.text);
  
//   await worker.terminate();
// }

const TakePicture = async()=>{
  const Picture = await CamerRef.current.takePictureAsync({
    quality: 0.8, // 0–1
    base64: false, // true if you want base64 data
    skipProcessing: true,
  });
  console.log("the Picture I got Finally is " , Picture , "the Uri I have is " , Picture.uri)
  setFile(Picture.uri)
  setCamTok(false)
}
const openAppSettings = async () => {
  try {
    if (Platform.OS === "ios") {
      // Opens app-specific settings page on iOS
      await Linking.openURL("app-settings:");
    } else {
      // Opens app-specific settings page on Android
      await Linking.openSettings();
    }
  } catch (err) {
    console.warn("Unable to open settings:", err);
  }
};
  // const Documents = DocumentPicker()
    const [file, setFile] = useState<any | null >(null);
    const [CamTok, setCamTok] = useState<boolean>(false)
    const [Permission, setPermission] = useCameraPermissions()
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // you can restrict to 'application/pdf' or 'image/*'
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        console.log("the Result I got in if is " , result, "the " , result.assets[0].uri)
        setFile(result.assets[0].uri);
        console.log('Picked file:', result);

      } else {
        console.log("the Result I got is " , result)
        console.log('User cancelled');
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  }
  useEffect(() => {
      if(CamTok){
        console.log(Permission,"the Permision")
        if(!Permission?.granted){
          Toast.show({type:"info",text1:"No Camera Permission",text2:"Allow the Camera In setting to Scan ",})
          console.log("the Toast Is Not Applied")
        }
      }
      console.log("the camera tok " , CamTok)
  }, [CamTok])
  
  return (
    <SafeAreaView>
    <ScrollView>
      {/* <Text>ScannerPage</Text> */}
      <View className="flex flex-col">
      <ImageBackground source={logo2} style={{width:500,height:100}}/>
      <Text className='text-2xl font-bold text-center py-2 my-8'>Scan The Document </Text>
      <View className='flex flex-row justify-center '>
      {
        file   ? <> <View>
          <Image source={{uri:file}} style={{width:300,height:400,left:10 , marginBottom:5}}/>
        </View>
        </> : 
       <Video source={scan2}  className='left-20' style={{width:300,height:400,left:10}} shouldPlay={true}
        isLooping={true} isMuted={true}       
       ></Video>}
      </View>

       {CamTok && <CameraView ref={CamerRef} style={{width:20,height:30}}  facing={"back"} />} 
      <View className='flex flex-col items-center gap-5 '>

        {/* <Pressable onPress={pickDocument} className='bg-[#1a1f32] text-white w-1/2 mx-auto px-2 py-4 text-center text-xl font-bold' >Gallery  </Pressable> */}

        <View className='flex flex-row  px-2 py-4 items-center justify-center gap-2 border w-1/2'>
        {
          CamTok ? <Pressable className='font-bold text-xl' onPress={()=>{setCamTok(false)}}>Cancel</Pressable> : 
        <Pressable className='font-bold text-xl' onPress={()=>{setCamTok(true)}}>Camera
        </Pressable>
       }
        <ReactNativeModal isVisible={CamTok && !Permission?.granted ? true : false} >
          <View className=' w-full h-[40vh] mx-2 bg-white items-center rounded-2xl flex flex-col gap-5'>
            <Text className='text-black font-bold text-xl'>Permission For Camera </Text>
            <Pressable className='px-4 py-2  w-1/2 border rounded-3xl  text-xl' onPress={openAppSettings} >Allow Camera</Pressable>
            <Pressable className='px-4 py-2  w-1/2 border rounded-3xl text-center text-xl' onPress={()=>{
              router.push("/")
              setCamTok(false)      
              }}>Dismiss</Pressable>
            <View className='flex flex-row'>
            <Text className='text-red-600 font-bold ml-4 text-xl'>Warning: </Text>
            <Text className='text-red-500 text-[14px] '> On Dismissing The Document Will be Not Scanned For Scanning Allow Camera </Text>
            </View>
          </View>
        </ReactNativeModal>
        {/* <Entypo name="camera" size={24} color="red" /> */}
        <Feather name="camera" size={24} color="black" />
          
        </View>
{!CamTok ? <Pressable onPress={pickDocument} className='bg-[#1a1f32] w-1/2 text-white px-2 py-4 text-center text-xl font-bold' >Gallery  </Pressable> 
:  <Pressable onPress={TakePicture} className='bg-[red] w-1/2 text-white px-2 py-4 text-center text-xl font-bold' >Click To Take</Pressable>

}
    <ScanedText file={file}></ScanedText>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScannerPage