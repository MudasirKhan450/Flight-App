import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { createWorker } from 'tesseract.js';
import ReactNativeModal from 'react-native-modal';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';


const ScanedText = ({file}:{file:any}) => {
    const [get_text, setget_text] = useState<boolean>(false)
    const [forSimpleb, setforSimpleb] = useState<boolean>(true)
    const ImageExtractor = async () => {
      setget_text(true)
        const worker = await createWorker('eng');
        const ret = await worker.recognize(file);
        // setget_text(ret.data.text)
        console.log(ret.data.text);
        router.push(`/(tabs)/text_watch?=${ret.data.text}`)
        // router.push("/(tabs)/text_watch")
        setforSimpleb(false)
        await worker.terminate();
        setget_text(false)
        // return ret.data.text
      }
      const Params = useLocalSearchParams()
      // const params = useSearchParams()
      // const GetToNextPage = ()=>{

      // }
    if(file){

        return (
      <ReactNativeModal isVisible={forSimpleb}>
        <View className=' w-full h-[40vh] ml-2 mr-8 bg-white rounded-2xl gap-5 flex flex-col items-center'>
          <Text className='font-bold text-xl mx-2 text-center mb-4 text-[#1a1f32]'>Click the Below Button To See Image Extracted Data</Text>
          <Pressable onPress={ImageExtractor} className='px-2 py-2 text-[#1a1f32] rounded-2xl border font-bold w-1/2  text-center ' disabled={get_text}>
          {
            get_text ? <ActivityIndicator size={'small'}></ActivityIndicator> : "Click"
          }
          </Pressable>
          {/* <Link href={'/text_watch'} className='px-2 py-2 text-xl text-[#1a1f32] rounded-2xl border font-bold w-1/2   text-center '> Click */}
          {/* </Link> */}
          <Pressable onPress={()=>setforSimpleb(false)} className='px-2 py-2  rounded-2xl border bg-red-600 text-white font-bold w-1/2  text-center '>Dismiss</Pressable>
          <Text className='font-bold  mx-2 text-center mb-4 text-[Red]'>After Dismissing You can watch it later by clicking the Image or banner</Text>

        </View>

      </ReactNativeModal>


  )
} else{
    return <></>
}
}

export default ScanedText