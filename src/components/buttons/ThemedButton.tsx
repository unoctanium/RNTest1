import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { ThemedText }  from '@/components/text'


type ThemedButtonProps = {
  onPress?: () => void;
  title?: string;
	style?: {};
	labelStyle?: {}; 
	children?: any;
}


export default function ThemedButton(props: ThemedButtonProps) {
  const { onPress, style, labelStyle, children} = props;
  return (
    <Pressable style={{ ...styles.pressable, ...style }} onPress={onPress}>
      <ThemedText style={{ ...styles.label, ...labelStyle }}>
        {children}
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
  label: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
