import { StatusBar } from 'expo-status-bar';
// import { BaseNavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Views/Screen1';
import Screen2 from './Views/Screen2';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack= createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='s1'> 
      <Stack.Screen name='s1' component={Screen1}
      options={{headerShown:false,

      }}
      />
      <Stack.Screen name='s2' component={Screen2}
      options={{
        headerShown:false,
      }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
