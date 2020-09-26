import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons'

import Home from './pages/Home';
import Grupos from './pages/Grupos';
import Wath from './pages/Wath';
import Marketplace from './pages/Marketplace';
import Notification from './pages/Notification';
import Menu from './pages/Menu';

const Tab = createMaterialTopTabNavigator();


function routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
    
          switch (route.name) {
            case 'Home':
              iconName = 'md-home';
              break;
            case 'Grupos':
              iconName = 'ios-contacts';
              break;
            case 'Wath':
              iconName = 'md-desktop';
              break;
            case 'Marketplace':
              iconName = 'ios-gift';
              break;
            case 'Notification':
              iconName = 'ios-notifications-outline';
              break;
            case 'Menu':
              iconName = 'ios-menu';
              break;
            default:
              iconName = 'circle';
              break;
          }
    
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3a86e9',
        inactiveTintColor: '#777',
        showLabel: false,
        showIcon: true,
        style: { padding: 5}
      }}
      
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Grupos" component={Grupos} />
      <Tab.Screen name="Wath" component={Wath} />
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}

export default routes;