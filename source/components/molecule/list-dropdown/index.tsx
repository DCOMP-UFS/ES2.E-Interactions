import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'

import { Data } from '@/components/organism/input-search-dropdown-sheet'
import ViewList from '@/components/template/view-list'

import SelectableOption from '../selectable-option'

type Props = {
  onToggleSelection: (item: Data) => void
  loadData: () => void
  sliceData: Data[]
  visible: boolean
}

const ListDropdown = ({ loadData, onToggleSelection, sliceData, visible }: Props) => {
  const keyExtractor = useCallback((item) => item.rxcui.toString(), [])

  const renderItem = useCallback(
    ({ item }) => (
      <SelectableOption
        key={keyExtractor(item)}
        item={item}
        onPress={onToggleSelection}
        isIcon={false}
      />
    ),
    []
  )

  if (!visible) return null

  return (
    <SafeAreaView
      style={{
        position: 'absolute',
        zIndex: 12,
        top: 50,
        marginLeft: 8,
        padding: 4,
        width: '100%',
        backgroundColor: '#c6c6c6',
        justifyContent: 'center',
      }}
    >
      <ViewList
        onEndReached={loadData}
        nestedScrollEnabled
        style={{
          maxHeight: 100,
        }}
      >
        {sliceData.map((item) => renderItem({ item }))}
      </ViewList>
    </SafeAreaView>
  )
}

export default ListDropdown
