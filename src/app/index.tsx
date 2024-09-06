import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

export default function App() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView level={2}>
  			<ThemedText type="title">App</ThemedText>      
      </ThemedView>
			
			<Link href="/login" style={styles.link}>
				<ThemedText type="link">Log in</ThemedText>
			</Link>
				
			<Link href="/register" style={styles.link}>
				<ThemedText type="link">Register</ThemedText>
			</Link>
			 
    </ThemedView>
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
    //paddingVertical: 15,
  },
	
});
