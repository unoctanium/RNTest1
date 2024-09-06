import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import ThemedText from '@/components/ThemedText'

export default function ThemedButton(props: { onPress: any; title?: string | undefined; style?: any; styleText?: any; }) {
  const { onPress, title = 'Ok', style, styleText } = props;
  return (
    <Pressable style={{ ...styles.pressable, ...style }} onPress={onPress}>
      <ThemedText style={{ ...styles.text, ...styleText }}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    opacity:1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
