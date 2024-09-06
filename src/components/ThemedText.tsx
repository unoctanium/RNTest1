import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

export default function ThemedText(props: { type?: string | undefined;  style?: any; children?: any; level?: number | undefined; }) {
    const { type, style, children, level = 1 } = props;

    const { colors } = useTheme();

    function levelColor(level: number) {
        switch (level) {
            case 1:
                return colors.label;
            case 2:
                return colors.labelSecondary;
            case 3:
                return colors.labelTertiary;
            case 4:
                return colors.labelQuarternary;
            default:
                return colors.label;
        }
    }

    return (
        <Text style={{ ...{ color: levelColor(level) }, ...styles.text, ...style }}>
            {children}
        </Text>
    );
};


const styles = StyleSheet.create({
    text: {
    }
});

