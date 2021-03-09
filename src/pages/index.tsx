import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './Home';
import Search from './Search';
import Order from './Order';
import User from './User';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = 'home-filled';
            } else if (route.name === 'Buscar') {
              iconName = 'search';
            } else if (route.name === 'Pedido') {
              iconName = 'list';
            } else if (route.name === 'Conta') {
              iconName = 'perm-identity';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#50BC11',
          inactiveTintColor: '#9A9A9A',
        }}>
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Buscar" component={Search} />
        <Tab.Screen name="Pedido" component={Order} />
        <Tab.Screen name="Conta" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
