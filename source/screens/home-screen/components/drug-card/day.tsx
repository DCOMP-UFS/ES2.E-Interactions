import React from 'react'
import { View, Text } from 'react-native'

const Day = () => {
  return (
    <View
      style={{
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Text
        style={{
          padding: 4,
          borderWidth: 1,
          marginHorizontal: 2,
        }}
      >
        D
      </Text>
      <Text
        style={{
          padding: 4,
          marginHorizontal: 2,
          borderWidth: 1,
          backgroundColor: '#0fff8f',
        }}
      >
        S
      </Text>
      <Text
        style={{
          padding: 4,
          marginHorizontal: 2,
          borderWidth: 1,
          backgroundColor: '#0fff8f',
        }}
      >
        T
      </Text>
      <Text
        style={{
          padding: 4,
          marginHorizontal: 2,
          backgroundColor: '#0fff8f',
          borderWidth: 1,
        }}
      >
        Q
      </Text>
      <Text
        style={{
          padding: 4,
          marginHorizontal: 2,
          borderWidth: 1,
        }}
      >
        Q
      </Text>
      <Text
        style={{
          padding: 4,
          marginHorizontal: 2,
          borderWidth: 1,
        }}
      >
        S
      </Text>
      <Text
        style={{
          padding: 4,
          marginHorizontal: 2,
          borderWidth: 1,
        }}
      >
        S
      </Text>
    </View>
  )
}

export default Day
