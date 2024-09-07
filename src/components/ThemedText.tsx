import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';


type ThemedTextProps = {
	type?: string;
	style?: {};
	elevation?: number; 
	children?: any;
}


export default function ThemedText(props: ThemedTextProps ) {
    const { type = '', style, children, elevation = 0 } = props;

    const { colors } = useTheme();

    function getColorFromElevation(elevation: number) {
        switch (elevation) {
            case 0:
                return colors.label;
            case 1:
                return colors.labelSecondary;
            case 2:
                return colors.labelTertiary;
            case 3:
                return colors.labelQuarternary;
            default:
                return colors.label;
        }
    }

    return (
        <Text style={{ ...{ color: getColorFromElevation(elevation) }, ...styles.text, ...style }}>
            {children}
        </Text>
    );
};


const styles = StyleSheet.create({
    text: {
    }
});

