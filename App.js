import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import Home from './src/screens/Home';
import VideoPlayer from "./src/screens/VideoPlayer";
const App = () => {
  const Stack = createStackNavigator();
  return (
    // Navigation container wraps the main navigation stack
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "Home",
            headerLeft: () => (
              <MaterialIcons
                name="menu"
                size={24}
                color="black"
                style={{ marginLeft: 16 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Video"
          component={VideoPlayer}
          options={{ title: "Video" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


