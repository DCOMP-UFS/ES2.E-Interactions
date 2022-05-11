import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import theme from '@/theme'
import { FontAwesome, Fontisto } from '@expo/vector-icons'

import StackHome from './stacks/stack-home'
import StackInteractions from './stacks/stack-interactions'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Interactions"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: theme.COLORS.TABBAR,
        },
        tabBarActiveTintColor: theme.COLORS.ACTIVE_COLOR_ICON,
        tabBarInactiveTintColor: theme.COLORS.INACTIVE_COLOR_ICON,
      }}
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
