/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useState } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper'

import SelectableOption from '@/components/molecule/selectable-option'

import { Container, ContainerActivityIndicator, ContainerSelected } from './styles'

const SUM_MIN_ITEMS = 10

type Options = {
  name: string
  rxcui: string
}

type Props = {
  items: Options[]
  onSelect: (items: Options[]) => void
}

type Data = Options & {
  selected: boolean
}

type RefProps = {
  current: {
    onToggleSelection: (items: Options) => void
    onRemoveItem: (state: Options[], items: Options) => void
    onAddItem: (state: Options[], item: Options) => void
    onClearItems: () => void
  }
}

export type InputSearchDropdownProps = {
  onToggleSelection: (items: Options) => void
  onRemoveItem: (state: Options[], items: Options) => void
  onAddItem: (state: Options[], item: Options) => void
  onClearItems: () => void
}

const InputSearchDropdown = React.forwardRef(({ items, onSelect }: Props, ref: RefProps) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Data[]>(() =>
    items.map((item) => ({ ...item, selected: false }))
  )
  const [itemsPerPage, setItemsPerPage] = useState(SUM_MIN_ITEMS)
  const [searchQuery, setSearchQuery] = useState('')

  const [selectedItem, setSelectedItem] = useState<typeof data>([])

  const onChangeSearch = (query: string) => setSearchQuery(query)

  const sliceData = useMemo(() => {
    if (searchQuery.trim().length === 0) {
      return data.slice(0, itemsPerPage)
    }

    return data
      .filter((item) => {
        const itemName = item.name.toLowerCase()
        const query = searchQuery.toLowerCase()
        return itemName.includes(query)
      })
      .slice(0, itemsPerPage)
  }, [data, searchQuery, itemsPerPage])

  const onRemoveItem = (state: Data[], item: Data) => {
    item.selected = false
    const newState = state.filter((stateItem) => stateItem.rxcui !== item.rxcui)
    onSelect(newState)
    return newState
  }

  const onAddItem = (state: Data[], item: Data) => {
    item.selected = true
    const newState = [...state, item]
    onSelect(newState)
    return newState
  }

  const onClearItems = () => {
    selectedItem.forEach((item) => {
      item.selected = false
    })
    setSelectedItem([])
    onSelect([])
  }

  const onToggleSelection = (item: Data) => {
    setSelectedItem((state) => {
      if (state.includes(item)) {
        return onRemoveItem(state, item)
      }

      return onAddItem(state, item)
    })
  }

  const loadData = async () => {
    if (!(sliceData.length < itemsPerPage)) {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 50))
      setItemsPerPage(itemsPerPage + SUM_MIN_ITEMS)
      setLoading(false)
    }
  }

  const renderFooter = () => {
    if (!loading) return null
    return (
      <ContainerActivityIndicator>
        <ActivityIndicator color={'#fff'} size="large" />
      </ContainerActivityIndicator>
    )
  }

  ref.current = {
    onToggleSelection,
    onRemoveItem,
    onAddItem,
    onClearItems,
  }

  const renderItem = useCallback(
    ({ item }) => <SelectableOption item={item} onPress={onToggleSelection} />,
    []
  )

  const keyExtractor = useCallback((item) => item.rxcui.toString(), [])

  const renderHeaderList = () => (
    <ContainerSelected>
      <FlatList
        data={selectedItem}
        keyExtractor={(item) => item.rxcui.toString()}
        renderItem={({ item }) => (
          <SelectableOption item={item as any} onPress={onToggleSelection} />
        )}
      />
    </ContainerSelected>
  )

  return (
    <Container>
      <Searchbar
        placeholder="Procure os Medicamentos"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          zIndex: 10,
        }}
      />

      <FlatList
        ListHeaderComponent={renderHeaderList}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        maxToRenderPerBatch={8}
        windowSize={8}
        initialNumToRender={10}
        data={sliceData}
        onEndReached={loadData}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.1}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  )
})

export default InputSearchDropdown
