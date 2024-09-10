import React from 'react';
import { View, StyleSheet } from 'react-native';
//import { useTheme } from '@/theme';
import { useTheme } from '@react-navigation/native';


type ThemedViewProps = {
	style?: {};
	elevation?: number; 
	children?: any;
}

export default function ThemedView( props : ThemedViewProps) {
const { style, elevation = 0, children } = props;
    
    const { colors } = useTheme();
   
    function getColorFromElevation(elevation: number) {
        switch (elevation) {
            /*
            case 0:
                return colors.background;
            case 1:
                return colors.backgroundSecondary;
            case 2:
                return colors.backgroundTertiary;
                */
            default:
                return colors.background;
        }
    }

    return (
        <View style={{ ...{ backgroundColor: getColorFromElevation(elevation) }, ...styles.view, ...style }}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    view: {
        //backgroundColor: colors.background
    }
});
