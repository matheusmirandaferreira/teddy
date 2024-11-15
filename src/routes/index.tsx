import { createStackNavigator } from '@react-navigation/stack';
import { Clients } from '../pages/Clients';
import { ClientDetails } from '../pages/ClientDetails';
import { Welcome } from '../pages/Welcome';

export function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Clients' component={Clients} />
        <Stack.Screen name='ClientDetails' component={ClientDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
