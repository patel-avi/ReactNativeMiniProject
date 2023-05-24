import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import NoteCard from '../components/NoteCard'

type Props = {}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const notes = [
    {title: 'Grocery List', important: false, text: '- strawberries \n- banana \n- yogurt \n- almonds', color: 'bg-pink-400'},
    {title: "Doctor's Appointment", important: true, text: 'April 1 at 2:00pm', color: 'bg-green-400'},
    {title: 'Smoothie Recipe', important: false, text: '1 cup strawberries \n1 cup bananas \n1/2 cup yogurt', color: 'bg-blue-400'}
]

const Home = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 items-center bg-orange-200">
      <Text className="mt-10 mb-5 text-2xl font-bold">NOTES</Text>
      <View>
        {notes.map(note => (
            <NoteCard
            key={note.title} 
            title={note.title}
            important={note.important}
            text={note.text}
            color={note.color}/>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Home