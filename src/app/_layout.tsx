import { ThemeProvider } from '@/theme';
import CustomStackContent from '@/components/customStackContent';

export default function RootLayout() {
		
  return (
		<>
			<ThemeProvider>
				<CustomStackContent />
			</ThemeProvider>
		</>
  );
}

