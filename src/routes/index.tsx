import { createStackNavigator } from '@react-navigation/stack';
import { Clients } from '../pages/Clients';
import { ClientDetails } from '../pages/ClientDetails';
import { Login } from '../pages/Login';

export function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Clients' component={Clients} />
      <Stack.Screen name='ClientDetails' component={ClientDetails} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}
