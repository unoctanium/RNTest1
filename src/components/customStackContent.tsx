import { Stack, useRouter } from 'expo-router';
import { View, Button, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

export default function CustomStackContent() {
	
	const router = useRouter();
	const { colors } = useTheme();
	
  return (
		<>
				<Stack
					screenOptions={{
						headerStyle: { backgroundColor: colors.secondaryBackground },
						headerTintColor: colors.text,	
					}}
				>
					<Stack.Screen name="index" options={{ 
							headerTitle: 'Home', 
							headerShown: true,
							headerLeft: () => <View style={{padding: 20}}>
								 <Image 
										style={{
											height: 35,
										}} 
										contentFit='contain'
										source={ require("@/assets/images/logo.png") }
									/>
								</View>,
							headerRight: () => <View style={styles.hstack}>
								<Button style={styles.button} title="Register" onPress={() => router.navigate('register')} />
								<Button style={styles.button} title="Log in" onPress={() => router.navigate('login')} />
							</View>
						}} 
					/>
					
					<Stack.Screen name="login" options={{ 
							headerTitle: 'Login', 
							headerShown: false,
							presentation: 'modal',
							//headerLeft: () => <Button title="Close" onPress={() => router.back()} />
						}} 
					/>
					
					<Stack.Screen name="register" options={{ 
							headerTitle: 'Register', 
							headerShown: false, 
							presentation: 'modal',
						}} 
					/>
			
					<Stack.Screen name="member" options={{ 
							headerTitle: 'Member', 
							headerShown: false,
						}} 
					/>
					
					<Stack.Screen name="+not-found" options={{
							headerTitle: 'Not found', 
							headerShown: false,
						}}
					/>
					
				</Stack>
		</>
  );
}

const styles = StyleSheet.create({
  hstack: {
    flex: 1,
		flexDirection: 'row',
		gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
	/*
	button: {
		marginHorizontal: 10,
	}
	*/
	/*
  link: {
    paddingVertical: 15,
  },
	*/
});

