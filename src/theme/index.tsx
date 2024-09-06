import React, { useState, useEffect} from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';


export const ThemeContext = React.createContext({
    isDark: false,
    colors: lightColors,
    setScheme: () => {},
});

export const ThemeProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    // Getting the device color theme, this will also work with react-native-web
    const colorScheme = useColorScheme(); // Can be dark | light | no-preference

    /*
    * To enable changing the app theme dynamicly in the app (run-time)
    * we're gonna use useState so we can override the default device theme
    */
    const [isDark, setIsDark] = React.useState(colorScheme === "dark");

    // Listening to changes of device appearance while in run-time
    React.useEffect(() => {
        setIsDark(colorScheme === "dark");
    }, [colorScheme]);

    const defaultTheme = {
        isDark,
        // Chaning color schemes according to theme
        colors: isDark ? darkColors : lightColors,
        // Overrides the isDark value will cause re-render inside the context.  
        setScheme: (scheme: string) => setIsDark(scheme === "dark"),
    };

  return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);