import React, { useLayoutEffect, useState } from 'react'
import { Pressable } from 'react-native'

import theme from '@/theme'
import { FontAwesome } from '@expo/vector-icons'

import { Drug, CardPressable, ContainerIcon } from './styles'

type Item = {
  rxcui: number | string
  name: string
  selected: boolean
}

type Props = {
  item: Item
  isIcon?: boolean
  onPress?: (item: Item) => void
}

const SelectableOption = ({ item, onPress, isIcon = true }: Props) => {
  const [selected, setSelected] = useState(item.selected)

  useLayoutEffect(() => {
    setSelected(item.selected)
  }, [item.selected])

  const handlePress = () => {
    if (onPress) onPress(item)
  }

  return (
    <Pressable style={CardPressable} onPress={handlePress}>
      <Drug>{item.name}</Drug>
      {isIcon && (
        <ContainerIcon>
          <FontAwesome
            name="check-circle"
            size={24}
            color={selected ? theme.COLORS.SELECT_ITEM_ICON : theme.COLORS.NO_SELECT_ITEM_ICON}
            style={{
              position: 'absolute',
              right: 0,
            }}
          />
        </ContainerIcon>
      )}
    </Pressable>
  )
}

export default React.memo(SelectableOption)
