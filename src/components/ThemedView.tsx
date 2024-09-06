import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

export default function ThemedView(props: { style?: any; level?: number | undefined; children: any; }) {
    const { style, level = 1, children } = props;
    
    const { colors } = useTheme();
    

    function levelBackgroundColor(level: number) {
        switch (level) {
            case 1:
                return colors.background;
            case 2:
                return colors.backgroundSecondary;
            case 3:
                return colors.backgroundTertiary;
            default:
                return colors.label;
        }
    }

    return (
        <View style={{ ...{ backgroundColor: levelBackgroundColor(level) }, ...styles.view, ...style }}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    view: {
        //backgroundColor: colors.background
    }
});
