import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Props = {}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const Home = (props: Props) => {
  return (
    <SafeAreaView className="flex flex-row justify-center min-h-screen">
      <Text className="text-customcolor">Hello world</Text>
    </SafeAreaView>
  )
}

export default Home