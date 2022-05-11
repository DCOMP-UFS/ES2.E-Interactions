/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react'
import { Button, FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper'

import { drugs } from '@/data/drugs.json'

import SelectableOption from '@/components/molecule/selectable-option'

import {
  Container,
  ContainerButtons,
  ContainerActivityIndicator,
  ContainerSelected,
} from './styles'

drugs.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

const SUM_MIN_ITEMS = 10

const InputSearchDropdown = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(() => drugs.map((item) => ({ ...item, selected: false })))
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

  const onToggleSelection = (item) => {
    setSelectedItem((state) => {
      if (state.includes(item)) {
        item.selected = false
        return state.filter((stateItem) => stateItem !== item)
      }
      item.selected = true
      return [...state, item]
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
        ListHeaderComponent={() => (
          <ContainerSelected>
            <FlatList
              data={selectedItem}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <SelectableOption item={item} onPress={onToggleSelection} />
              )}
            />
          </ContainerSelected>
        )}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        maxToRenderPerBatch={15}
        initialNumToRender={10}
        data={sliceData}
        onEndReached={loadData}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SelectableOption item={item} onPress={onToggleSelection} />}
      />
      <ContainerButtons>
        <Button
          title="Dispensar"
          onPress={() => {
            return
          }}
        />
        <Button
          title="Interagir"
          onPress={() => {
            return
          }}
        />
      </ContainerButtons>
    </Container>
  )
}

export default InputSearchDropdown
