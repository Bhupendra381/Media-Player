import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import AudioPlayer from '../components/AudioPlayer';
import VideoPlayer from '../screens/VideoPlayer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function homeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'HomePage', 
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}

function audioScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AudioPlayer"
      screenOptions={{
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={{
          title: 'Audio Player',

        }} />
    </Stack.Navigator>
  );
}

function videoScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="VideoPlayer"
      screenOptions={{
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{
          title: 'Video Player', 

        }} />
    </Stack.Navigator>
  );
}



function Nav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home Page' }}
          component={homeScreenStack} />
        <Drawer.Screen
          name="AudioPlayer"
          options={{ drawerLabel: 'Audio Player' }}
          component={audioScreenStack} />
        <Drawer.Screen
          name="VideoPlayer"
          options={{ drawerLabel: 'Video Player' }}
          component={videoScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Nav;