import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'

import { drugRemove } from '@/reducers/reducers/drugs/drugs-slice'

type Props = {
  name: string
  rxcui: string
}

const DrugCard = ({ name, rxcui }: Props) => {
  const dispatch = useDispatch()

  const onRemoveDrug = () => {
    dispatch(drugRemove(rxcui))
  }

  return (
    <Pressable
      onLongPress={onRemoveDrug}
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
          {name}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}
      ></View>
    </Pressable>
  )
}

export default DrugCard
