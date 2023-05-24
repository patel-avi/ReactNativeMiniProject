import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type Props = {title: string; important: boolean; text: string}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const NoteCard = ({title, important, text}: Props) => {
    const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text>{title}</Text>
            {important ? <Text>Important</Text> : null}
            <Text>{text}</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default NoteCard