import { createStackNavigator } from '@react-navigation/stack';
import { P1 } from '../screens/personajes/P1';
import { P2 } from '../screens/personajes/P2';
import { PageLocation } from '../screens/ubicacion/PageLocation';
import { PageCapitulos } from '../screens/capitulos/PageCapitulos';


const Stack = createStackNavigator();

export const  StackNavigator=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }}
    >
      <Stack.Screen name="P1" component={P1} />
      <Stack.Screen name="PageLocation" component={PageLocation} />
      <Stack.Screen name="PageCapitulos" component={PageCapitulos} />
    
    </Stack.Navigator>
  );
}