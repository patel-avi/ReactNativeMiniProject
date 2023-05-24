import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Props = {}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>

const Details = (props: Props) => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details