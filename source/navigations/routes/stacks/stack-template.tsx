/* eslint-disable react/prop-types */
import { createStackNavigator } from '@react-navigation/stack'

import CustomNavigationBar from '@/components/organism/app-bar-header'

const Stack = createStackNavigator()

type Props = {
  items: Array<{
    name: string
    component: React.ComponentType
    options: {
      tabBarLabel: string
      tabBarIcon?: ({ color }) => React.ReactNode
    }
  }>
}

const StackTemplate = ({ items }: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
    >
      {items.map(({ name, component, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            ...options,
            headerShown: true,
          }}
        />
      ))}
    </Stack.Navigator>
  )
}

export default StackTemplate
