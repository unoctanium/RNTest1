import { View, Text, useWindowDimensions } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '@/theme';

import CustomDrawerContent from '@/components/customDrawerContent';

export default function _layout() {
	
	const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
	
	const { colors } = useTheme();
	console.log(colors);
	
	
  return (
    <Drawer
			screenOptions={{
				drawerLabelStyle: {
					marginLeft: -20
					},
				drawerType: isLargeScreen ? 'permanent' : 'front',
				headerLeft: isLargeScreen ? false : () => <DrawerToggleButton /> ,
				// drawerActiveBackgroundColor: 'gray',
				// drawerActiveTintColor: 'white',
				// drawerInactiveTintColor: 'white'
				drawerStyle: { backgroundColor: colors.secondaryBackground },
			}}
			drawerContent={CustomDrawerContent}
		>
			
			<Drawer.Screen
				name="index"
				options={{
					drawerLabel: 'Home', 
					title: 'Home',
					drawerIcon: ({size, color})=>(
				  	<Ionicons name='home' size={size} color={color} />	
					)
				}}
			/>
			
			<Drawer.Screen
				name="detail1"
				options={{
					drawerLabel: 'Detail 1', 
					title: 'Detail 1',
					drawerIcon: ({size, color})=>(
						<Ionicons name='checkmark-circle' size={size} color={color} />
					)
				}}
			/>	
			
			
			<Drawer.Screen
				name="+not-found"
				options={{
					drawerItemStyle: { display: 'none' },
					title: 'Not Found',
				}}
			/>			
		
    </Drawer>
  );
}

