import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import theme from '@/theme'
import { FontAwesome, Fontisto } from '@expo/vector-icons'

import StackHome from './stacks/stack-home'
import StackInteractions from './stacks/stack-interactions'

const Tab = createMaterialBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Interactions"
      activeColor={theme.COLORS.ACTIVE_COLOR_ICON}
      inactiveColor={theme.COLORS.INACTIVE_COLOR_ICON}
      barStyle={{ backgroundColor: theme.COLORS.APPCOLOR }}
    >
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Prontuários',
          tabBarIcon: ({ color }) => (
            <FontAwesome adjustsFontSizeToFit name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Interactions"
        component={StackInteractions}
        options={{
          tabBarLabel: 'Interações',
          tabBarIcon: ({ color }) => (
            <Fontisto adjustsFontSizeToFit name="pills" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
