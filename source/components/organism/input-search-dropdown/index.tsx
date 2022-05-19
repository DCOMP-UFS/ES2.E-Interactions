/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Searchbar } from 'react-native-paper'

import SelectableOption from '@/components/molecule/selectable-option'
import ViewList from '@/components/template/view-list'

import { Container, ContainerSelected } from './styles'

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
  active: boolean
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
  const [data, setData] = useState<Data[]>(() =>
    items.map((item) => ({ ...item, selected: false, active: true }))
  )
  const [itemsPerPage, setItemsPerPage] = useState(SUM_MIN_ITEMS)
  const [searchQuery, setSearchQuery] = useState('')

  const [selectedItem, setSelectedItem] = useState<typeof data>([])

  const onChangeSearch = (query: string) => setSearchQuery(query)

  const sliceData = useMemo(() => {
    if (searchQuery.trim().length === 0) {
      return data.filter((item) => !selectedItem.includes(item)).slice(0, itemsPerPage)
    }

    return data
      .filter((item) => {
        const itemName = item.name.toLowerCase()
        const query = searchQuery.toLowerCase()
        return itemName.includes(query) && !selectedItem.includes(item)
      })
      .slice(0, itemsPerPage)
  }, [data, searchQuery, itemsPerPage, selectedItem])

  const onRemoveItem = (state: Data[], item: Data) => {
    item.selected = false
    item.active = true
    const newState = state.filter((stateItem) => stateItem.rxcui !== item.rxcui)

    onSelect(newState)
    return newState
  }

  const onAddItem = (state: Data[], item: Data) => {
    item.selected = true
    item.active = false
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
      await new Promise((resolve) => setTimeout(resolve, 50))
      setItemsPerPage(itemsPerPage + SUM_MIN_ITEMS)
    }
  }

  ref.current = {
    onToggleSelection,
    onRemoveItem,
    onAddItem,
    onClearItems,
  }

  const keyExtractor = useCallback((item) => item.rxcui.toString(), [])

  const renderItem = useCallback(
    ({ item }) => (
      <SelectableOption key={keyExtractor(item)} item={item} onPress={onToggleSelection} />
    ),
    []
  )

  return (
    <Container>
      <ScrollView style={{ flexGrow: 1 }}>
        <View>
          <Searchbar
            placeholder="Procure os Medicamentos"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              zIndex: 10,
            }}
          />
          <ContainerSelected>
            {selectedItem.map((item) => (
              <SelectableOption key={item.rxcui} item={item} onPress={onToggleSelection} />
            ))}
          </ContainerSelected>
        </View>
        <SafeAreaView>
          <ViewList
            onEndReached={loadData}
            nestedScrollEnabled
            style={{
              maxHeight: 250,
            }}
          >
            {sliceData.map((item) => renderItem({ item }))}
          </ViewList>
        </SafeAreaView>
      </ScrollView>
    </Container>
  )
})

export default InputSearchDropdown
