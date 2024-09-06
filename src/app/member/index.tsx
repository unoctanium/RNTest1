import { View, Text, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Member() {
  return (
    <View>
			<Text>Member Home</Text>
			<Ionicons name="home" size={32} color="green" />
			<Image
				source={ require('@/assets/images/logo.png')}
        />
    </View>
  );
}

