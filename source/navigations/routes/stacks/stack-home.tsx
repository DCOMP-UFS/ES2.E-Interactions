/* eslint-disable react/prop-types */

import HomeScreen from '@/screens/home-screen'

import StackTemplate from './stack-template'

const StackHome = () => {
  return (
    <StackTemplate
      items={[
        {
          name: 'Home',
          component: HomeScreen,
          options: {
            tabBarLabel: 'Prontuários',
          },
        },
      ]}
    />
  )
}

export default StackHome
