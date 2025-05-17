import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';
import MyBusScreen from '../screen/MyBusScreen';
import RoutesScreen from '../screen/RoutesScreen';
import ScheduleScreen from '../screen/ScheduleScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={23} color={focused ? '#FFCC00' : '#888'} />;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              return <Ionicons name={iconName} size={23} color={focused ? '#FFCC00' : '#888'} />;
            case 'MyBus':
              iconName = 'directions-bus';
              return <MaterialIcons name={iconName} size={23} color={focused ? '#FFCC00' : '#888'} />;
            case 'Routes':
              iconName = 'directions';
              return <MaterialIcons name={iconName} size={23} color={focused ? '#FFCC00' : '#888'} />;
            case 'Schedule':
              iconName = 'schedule';
              return <MaterialIcons name={iconName} size={23} color={focused ? '#FFCC00' : '#888'} />;
            default:
              return null;
          }
        },
        tabBarLabelStyle: { fontSize: 10,},
        tabBarActiveTintColor: '#FFCC00',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="MyBus" component={MyBusScreen} />
      <Tab.Screen name="Routes" component={RoutesScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
