import React from 'react';
import { StyleSheet, Pressable, PressableProps } from 'react-native';
//import { useTheme } from '@/theme';
import { useTheme } from '@react-navigation/native';

type BasicButtonProps = PressableProps & {
  style?: any;
  onPress?: () => void;
}

const BasicButton = ({ style, onPress, ...rest }: BasicButtonProps) => {
  
  const { colors } = useTheme();

  return (
    <Pressable
      style={{ backgroundColor:colors.primary, ...styles.pressable, ...style }}
      onPress={onPress}
      {...rest}
    />
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
    opacity:1,
  },
});

export default BasicButton;
