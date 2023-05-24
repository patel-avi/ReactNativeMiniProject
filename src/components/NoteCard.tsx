import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type Props = {title: string; important: boolean; text: string; color: string}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const NoteCard = ({title, important, text, color}: Props) => {
    const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className={`border-black border rounded-md m-2 w-72 ${color}`}>
        <TouchableOpacity className="p-2" onPress={() => navigation.navigate('Details', {
            title: title,
            important: important,
            text: text,
            color: color,
        })}>
            <Text className="font-bold pb-2">{title}</Text>
            {important ? <Text className="text-red-600 text-right font-bold">Important</Text> : null}
            <Text>{text}</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default NoteCard