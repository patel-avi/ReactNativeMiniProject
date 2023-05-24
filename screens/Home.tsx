import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <SafeAreaView className="flex flex-row justify-center">
      <Text className="text-customcolor">Hello world</Text>
    </SafeAreaView>
  )
}

export default Home