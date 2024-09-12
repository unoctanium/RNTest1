import { Text, View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/text';
import { Link, Stack } from 'expo-router';

import { useTheme } from '@react-navigation/native';

export default function NotFoundScreen() {
  
  const { colors } = useTheme();
  
  return (
    <>

      <View style={styles.container}>
        <Text style={{ color:colors.gray3 }}>Hi</Text>
        <ThemedText style={{ color: colors.primary}}>This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText style={{ color: colors.gray3 }}>Go to home screen!</ThemedText>
	     </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

/*
      <Stack.Screen options={{ title: 'Oops!' }} />
			*/