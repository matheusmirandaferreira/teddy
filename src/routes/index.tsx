import { createStackNavigator } from '@react-navigation/stack';

import { Clients } from '@/pages/Clients';
import { Welcome } from '@/pages/Welcome';
import { Header } from '@/components/Header';

export const paths = {
  welcome: 'Welcome',
  clients: 'Clients',
} as const;

export function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={paths.welcome} component={Welcome} />
        <Stack.Group
          screenOptions={{
            headerShown: true,
            header: () => <Header />,
          }}
        >
          <Stack.Screen name={paths.clients} component={Clients} />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
}
