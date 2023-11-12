import "react-native-gesture-handler";
import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
import AddIcon from "./assets/add-icon";

const Stack = createStackNavigator();
const App = () => {

  const categories = [
    { id: 1, name: "Goal Evidence" },
    { id: 2, name: "Support Coordination" },
    { id: 3, name: "Active Duty" },
  ];

  const clients = [
    { id: 1, name: "Client 1" },
    { id: 2, name: "Client 2" },
    // Add more clients as needed
  ];
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="Home" options={({navigation})=>({ title: "Notes", headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.navigate("AddNote")}
            style={{ marginBottom: 40 }}
          >
            <AddIcon/>
          </TouchableOpacity>
          ), })} >
            {(props) => <HomeScreen {...props}  />}
          </Stack.Screen>
          <Stack.Screen name="AddNote" options={{ title: "Add Note" }}>
            {(props) => (
              <AddNoteScreen
                {...props}
                categories={categories}
                clients={clients}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
