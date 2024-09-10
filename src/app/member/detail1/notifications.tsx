import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';

import { ThemedButton, BasicButton } from '@/components/buttons'
import { ThemedText } from '@/components/text';

export default function Notifications() {
    const navigation = useNavigation();
    
  const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer())
  }
  
  return (
    <View>
      <Text>Notifications</Text>
      <Button title="Hallo"/>
      <ThemedButton onPress={openDrawer}>
        open drawer  
      </ThemedButton>
      <BasicButton style={{ backgroundColor: 'red' }}>
        <ThemedText>lalala</ThemedText>
      </BasicButton>
      <BasicButton>
        <ThemedText>lalala</ThemedText>
      </BasicButton>
    </View>
  )
}