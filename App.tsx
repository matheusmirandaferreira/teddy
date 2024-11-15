import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function App() {
  const queryClient = new QueryClient();

  const [loaded, error] = useFonts({
    'Inter_Medium': require('./assets/fonts/Inter_Medium.ttf'),
    'Inter_Regular': require('./assets/fonts/Inter_Regular.ttf'),
    'Inter_SemiBold': require('./assets/fonts/Inter_SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
