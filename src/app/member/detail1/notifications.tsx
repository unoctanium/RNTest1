import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';

import ThemedButton from '@/components/ThemedButton'

export default function Notifications() {
    const navigation = useNavigation();
    
  const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer())
  }
  
  return (
    <View>
      <Text>Notifications</Text>
      <ThemedButton title="open drawer" onPress={openDrawer}/>
    </View>
  )
}