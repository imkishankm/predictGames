import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from './src/screens/dashboard';
import ProfileScreen from './src/screens/profile';
import {createStackNavigator} from '@react-navigation/stack';
import GameDetailScreen from './src/screens/gameDetails';
import {DATA} from './src/utils/payload';
import { GamesContext, UserContext} from './src/utils/contexts';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={DashboardScreen} />
      <Stack.Screen name="GameDetail" component={GameDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(DATA?.user || {});
  const [games, setGames] = useState(DATA?.games || []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <GamesContext.Provider value={{games, setGames}}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{header: () => null,tabBarIcon:()=>null}}>
            <Tab.Screen name="Dashboard" component={DashboardStack} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </GamesContext.Provider>
    </UserContext.Provider>
  );
}
