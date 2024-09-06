import { View, Text, Pressable, Image, useWindowDimensions } from 'react-native'
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

//import { useTheme } from '@/theme';

function CustomDrawerContent(props: any) {

	const { bottom } = useSafeAreaInsets();
	const navigation = useNavigation();

	const closeDrawer = () => {
		navigation.dispatch(DrawerActions.closeDrawer())
	}
	return (
		<View
			style={{ flex: 1 }}
		>
			<DrawerContentScrollView {...props} scrollEnabled={false}>
				<View style={{ padding: 20 }}>
					<Image
						style={{
							height: 35,
						}}
						resizeMode="contain"
						source={require("@/assets/images/logo.png")}
					/>
				</View>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>

			<Pressable onPress={closeDrawer} style={{ padding: 20, paddingBottom: bottom + 10 }}>
				<Text>Logout</Text>
			</Pressable>
		</View>
	)
}





export default function MemberLayout() {

	const dimensions = useWindowDimensions();
	const isLargeScreen = dimensions.width >= 768;

	//const { colors } = useTheme();
	//console.log(colors);


	return (
		<Drawer
			screenOptions={{
				drawerLabelStyle: {
					marginLeft: -20
				},
				drawerType: isLargeScreen ? 'permanent' : 'front',
				headerLeft: isLargeScreen ? false : () => <DrawerToggleButton />,
				// drawerActiveBackgroundColor: 'gray',
				// drawerActiveTintColor: 'white',
				// drawerInactiveTintColor: 'white'
				//drawerStyle: { backgroundColor: colors.secondaryBackground },
			}}
			drawerContent={CustomDrawerContent}
		>

			<Drawer.Screen
				name="index"
				options={{
					drawerLabel: 'Home',
					title: 'Home',
					drawerIcon: ({ size, color }) => (
						<Ionicons name='home' size={size} color={color} />
					)
				}}
			/>

			<Drawer.Screen
				name="detail1"
				options={{
					drawerLabel: 'Detail 1',
					title: 'Detail 1',
					drawerIcon: ({ size, color }) => (
						<Ionicons name='checkmark-circle' size={size} color={color} />
					)
				}}
			/>




		</Drawer>
	);
}

