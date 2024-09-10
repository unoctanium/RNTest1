import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native'
import { lightColors, darkColors, TColors } from './colors'


// Define extended theme type that literally *extends* Theme
interface ExtendedTheme extends Theme {
  // Reference the Theme type's colors field and make our field an intersection
  // Learn more:
  //   https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
  //   https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
    colors: Theme['colors'] & TColors;
    

}

export const lightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    // Define your custom colors here
    // If you want to import the default theme's colors, uncomment the following line:
      ...DefaultTheme.colors,
      ...lightColors
  }
}


export const darkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    // Define your custom colors here
    // If you want to import the default theme's colors, import DarkTheme within the import at the top and uncomment the following line:
      ...DarkTheme.colors,
      ...darkColors
  }
}

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme
}