import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

export default function Member() {
  return (
    <ThemedView>
      <ThemedView elevation={2}>
        <ThemedText>Member Home</ThemedText>
      </ThemedView>

			<ThemedText>Member Home</ThemedText>
			<Ionicons name="home" size={32} color="green" />
			<Image
				source={ require('@/assets/images/logo.png')}
        />
    </ThemedView>
  );
}

