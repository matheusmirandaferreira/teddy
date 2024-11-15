import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { theme } from '@/styles/theme';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Routes } from '@/routes';
import { SafeAreaWrapper } from '@/components/SafeAreaWrapper';

export default function App() {
  const queryClient = new QueryClient();

  const [loaded, error] = useFonts({
    'Inter_Medium': require('@/assets/fonts/Inter_Medium.ttf'),
    'Inter_Regular': require('@/assets/fonts/Inter_Regular.ttf'),
    'Inter_SemiBold': require('@/assets/fonts/Inter_SemiBold.ttf'),
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
    <SafeAreaWrapper>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaWrapper>
  );
}
