/* eslint-disable react/prop-types */

import InteractionsScreen from '@/screens/interactions-screen'

import StackTemplate from './stack-template'

const StackInteractions = () => {
  return (
    <StackTemplate
      items={[
        {
          name: 'Interactions-Stack',
          component: InteractionsScreen,
          options: {
            tabBarLabel: 'Interações',
          },
        },
      ]}
    />
  )
}

export default StackInteractions
