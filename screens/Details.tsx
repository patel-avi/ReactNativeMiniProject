import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type Props = {}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>

const Details = (props: Props) => {
    const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView>
    <Text>Details</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>All notes</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Details