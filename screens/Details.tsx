import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp, useNavigation } from '@react-navigation/native'

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>

type Props = {
    route: DetailsRouteProp;
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>

const Details = ({route}: Props) => {
    const navigation = useNavigation<NavigationProp>();
    const {title, important, text} = route.params;
  return (
    <SafeAreaView>
        <View>
            <Text>{title}</Text>
            {important ? <Text>Important</Text> : null}
            <Text>{text}</Text>
        </View>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>All notes</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Details