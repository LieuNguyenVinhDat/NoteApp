// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Splash from "./screens/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNote from "./screens/CreateNote";
import ViewNote from "./screens/ViewNote";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <stack.Navigator screenOptions={{headerShown:false}}> */}
    
      <stack.Navigator>
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Note App",
          }}
        />
        <stack.Screen
          name="CreateNote"
          component={CreateNote}
          options={{
            title: "Create Note",
          }}
        />
        <stack.Screen
          name="ViewNote"
          component={ViewNote}
          options={{
            title: "Note",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
