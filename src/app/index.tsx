import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedView }  from '@/components/view';
import { ThemedText } from '@/components/text';

export default function App() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView elevation={1}>
  			<ThemedText >App</ThemedText>      
      </ThemedView>
			
			<Link href="/login" style={styles.link}>
				<ThemedText >Log in</ThemedText>
			</Link>
				
			<Link href="/register" style={styles.link}>
				<ThemedText >Register</ThemedText>
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
