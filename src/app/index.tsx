import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
			
			<Text type="title">App</Text>
			
			<Link href="login" style={styles.link}>
				<Text type="link">Log in</Text>
			</Link>
				
			<Link href="register" style={styles.link}>
				<Text type="link">Register</Text>
			</Link>
			 
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
	/*
  link: {
    paddingVertical: 15,
  },
	*/
});
