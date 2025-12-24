import { View, Text, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Stack, Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// <MaterialCommunityIcons name="email-outline" size={24} color="black" />
{/* <MaterialIcons name="account-circle" size={24} color="black" /> */}
<MaterialIcons name="inbox" size={24} color="black" />
// <MaterialIcons name="local-offer" size={24} color="black" />


const Rootlayout = () => {
  return (
        <Tabs screenOptions={{tabBarShowLabel:false,tabBarStyle:{
           backgroundColor:"#ec441e", padding:4, marginBottom:10,
        } , headerShown:false }}>
            <Tabs.Screen name='Home'
            options={{
                tabBarIcon:({focused})=>(<>
                    {
                        focused ? (
                            <View className='flex flex-col text-white bg-white rounded-full p-2'>
                            {/* <Image source={""}/> */}
                            {/* <Feather name="home" size={24} color="black" />     */}
                            <Entypo name="home" size={24} color="black" />
                            {/* <Text className='text-white '>Home</Text> */}
                            </View>
                        ) : <View className='flex flex-col items-center'>
                        {/* <Image source={""}/> */}
                        {/* <Feather name="home" size={24} color="white" />     */}
                        <Entypo name="home" size={24} color="white" />
                        
                        </View>
                    }

                </>)
            }}
            />
            <Tabs.Screen name='booking'
            options={{
                tabBarIcon:({focused})=>(<>
                    {
                        focused ? (
                            <View className='flex flex-col items-center bg-white rounded-full p-2 '>
                            {/* <Image source={""}/> */}
                            <MaterialIcons name="airplane-ticket" size={24} color="black" />  
                            
                            </View>
                        ) : <View className='flex flex-col items-center'>
                        {/* <Image source={""}/> */}
                        <MaterialIcons name="airplane-ticket" size={24} color="white" />  
                        {/* <Text className='text-white text-4xl'>Home</Text> */}
                        </View>
                    }

                </>)
            }}
            />            <Tabs.Screen name='inbox'
            options={{
                tabBarIcon:({focused})=>(<>
                    {
                        focused ? (
                            <View className='flex flex-col items-center bg-white rounded-full p-2 '>
                            {/* <Image source={""}/> */}
                            {/* <MaterialCommunityIcons name="email-outline" size={24} color="white" />     */}
                            {/* <Entypo name="home" size={24} color="black" /> */}
                            <MaterialIcons name="email" size={24} color="black" />
                            
                            </View>
                        ) : <View className='flex flex-col items-center'>
                        {/* <Image source={""}/> */}
                        {/* <MaterialCommunityIcons name="email-outline" size={24} color="white" />     */}
                        {/* <Entypo name="home" size={24} color="white" /> */}
                        <MaterialIcons name="email" size={24} color="white" />
                        
                        </View>
                    }

                </>)
            }}
            />
            <Tabs.Screen name='recent'
            options={{
                tabBarIcon:({focused})=>(<>
                    {
                        focused ? (
                            <View className='flex flex-col items-center bg-white rounded-full p-2'>
                            {/* <Image source={""}/> */}
                            <MaterialCommunityIcons name="airplane-clock" size={24} color="black" />    
                            
                            </View>
                        ) : <View className='flex flex-col items-center'>
                        {/* <Image source={""}/> */}
                        <MaterialCommunityIcons name="airplane-clock" size={24} color="white" />    
                        
                        </View>
                    }

                </>)
            }}
            />
            <Tabs.Screen name='profile'
            options={{
                tabBarIcon:({focused})=>(<>
                    {
                        focused ? (
                            <View className='flex flex-col items-center bg-white rounded-full p-2'>
                            {/* <Image source={""}/> */}
                            <MaterialIcons name="account-circle" size={24} color="black" />    
                            
                            </View>
                        ) : <View className='flex flex-col items-center'>
                        {/* <Image source={""}/> */}
                        <MaterialIcons name="account-circle" size={24} color="white" />    
                        
                        </View>
                    }

                </>)
            }}
            />

        </Tabs>
  )
}

export default Rootlayout