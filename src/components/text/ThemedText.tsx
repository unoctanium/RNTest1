import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

type ThemedTextProps = TextProps & {
    style?: any;
    // additional props go here
}


export default function ThemedText( {style, ...rest}: ThemedTextProps ) {
    const { colors } = useTheme();

    return (
        <Text style={{ ...{ color: colors.text }, ...styles.text, ...style }}
            {...rest}
        />
    );
};


const styles = StyleSheet.create({
    text: {
        // additional styles go here
    }
});

