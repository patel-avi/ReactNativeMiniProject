import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import NoteCard from '../components/NoteCard'

type Props = {}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const notes = [
    {title: 'Grocery List', important: false, text: 'strawberries, banana, yogurt, almonds'},
    {title: "Doctor's Appointment", important: true, text: 'April 1'},
    {title: 'Smoothie Recipe', important: false, text: 'strawberries, banana, yogurt'}
]

const Home = (props: Props) => {
  return (
    <SafeAreaView className="flex flex-row justify-center min-h-screen">
      <Text className="text-customcolor">Notes</Text>
      <View>
        {notes.map(note => (
            <NoteCard
            key={note.title} 
            title={note.title}
            important={note.important}
            text={note.text}/>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Home