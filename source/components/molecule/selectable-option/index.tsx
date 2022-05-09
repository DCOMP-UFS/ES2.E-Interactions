import React, { useState } from 'react'
import { Pressable } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { Drug, CardPressable } from './styles'

type Item = {
  id: number
  name: string
}

type Props = {
  item: Item
  onPress?: (item: Item) => void
  defaultSelected?: boolean
}

const SelectableOption = ({ item, onPress, defaultSelected = false }: Props) => {
  const [selected, setSelected] = useState(defaultSelected)

  const handlePress = () => {
    setSelected(!selected)
    if (onPress) onPress(item)
  }

  return (
    <Pressable style={CardPressable} onPress={handlePress}>
      <Drug>{item.name}</Drug>
      <FontAwesome
        name="check-circle"
        size={24}
        color={selected ? '#00a680' : '#ccc'}
        style={{
          flex: 0.5,
          width: '10%',
        }}
      />
    </Pressable>
  )
}

export default SelectableOption
