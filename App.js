import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
// TODO #3B: Import SettingsScreen so it can be wired into the bottom tabs.
// Verify: Once imported, the Settings tab can render without "Component is not defined".

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#007AFF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Screen Navigator' }}
      />
      {/* TODO #1: Register the Detail screen on this stack so HomeScreen can navigate to it.
          Verify: Tapping a card on Home pushes a screen titled "Details". */}
      <Stack.Screen
        name="Detail"
        component={DetailScreen} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          }
          // TODO #3C: Add an icon mapping for the Settings tab so it shows the
          // gear icon (filled when active, outline otherwise).
          // Verify: The Settings tab in the bottom bar shows a settings icon.

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 8 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ tabBarLabel: 'Home', title: 'Home' }}
      />
      {/* TODO #3D: Add the Settings tab below this one.
          Verify: The bottom bar shows two tabs and tapping Settings renders SettingsScreen. */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainTabs />
    </NavigationContainer>
  );
}
