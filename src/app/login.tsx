import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Login() {
	
	const router = useRouter();

  return (
    <View>
			<Text>Login</Text>
			<View style={styles.vstack} >
				<Button title="Log in" onPress={() => router.back()} />
				<Button title="Cancel" onPress={() => router.back()} />
			</View>			
    </View>
  );
}


const styles = StyleSheet.create({
	 vstack: {
    flex: 1,
		flexDirection: 'column',
		gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});


 