import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp, useNavigation } from '@react-navigation/native'

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>

type Props = {
    route: DetailsRouteProp;
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>

const Details = ({route}: Props) => {
    const navigation = useNavigation<NavigationProp>();
    const {title, important, text, color} = route.params;
  return (
    <SafeAreaView className={`flex-1 items-center ${color}`}>
        <View>
            <Text className="mt-10 mb-5 text-2xl font-bold">{title}</Text>
            {important ? <Text className="text-red-600 font-bold pb-5">Important</Text> : null}
            <Text>{text}</Text>
        </View>
    <TouchableOpacity className="mt-10 p-1 rounded-md bg-gray-800" onPress={() => navigation.goBack()}>
        <Text className="text-lg text-white">All notes</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Details