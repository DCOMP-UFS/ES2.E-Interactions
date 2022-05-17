import React from 'react'
import { View, Text } from 'react-native'

import Day from './day'

const DrugCard = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        margin: 8,
        maxHeight: 80,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            fontSize: 12,
            textTransform: 'uppercase',
            fontWeight: '800',
          }}
        >
          Medicamento:
        </Text>
        <Text
          style={{
            fontSize: 12,
            textTransform: 'uppercase',
            marginLeft: 10,
          }}
        >
          Dipyrone
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            fontSize: 12,
            textTransform: 'uppercase',
            fontWeight: '800',
          }}
        >
          Dosagem:
        </Text>
        <Text
          style={{
            fontSize: 12,
            textTransform: 'uppercase',
            marginLeft: 10,
          }}
        >
          500mg
        </Text>
      </View>
      <Day />
    </View>
  )
}

export default DrugCard
