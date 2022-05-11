/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react'
import { Button, FlatList, View, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper'

import { drugs } from '@/data/drugs.json'

import SelectableOption from '@/components/molecule/selectable-option'

import { Container, ContainerButtons } from './styles'

drugs.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

const SUM_MIN_ITEMS = 5

const InputSearchDropdown = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(drugs)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchQuery, setSearchQuery] = useState('')

  const [selectedItem, setSelectedItem] = useState([])

  const onChangeSearch = (query: string) => setSearchQuery(query)

  const sliceData = useMemo(() => {
    if (searchQuery.trim().length === 0) {
      return data.slice(0, itemsPerPage)
    }

    return data.filter((item) => item.name.includes(searchQuery)).slice(0, itemsPerPage)
  }, [data, searchQuery, itemsPerPage])

  const onChangeSelection = (item) => {
    setSelectedItem((state) => [...state, item])
    setData((state) => {
      return state.filter((i) => i.id !== item.id)
    })
  }

  const onRemoveSelection = (item) => {
    setSelectedItem((state) => state.filter((i) => i.id !== item.id))
    setData((state) =>
      [...state, item].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    )
  }

  const loadData = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 200))
    setItemsPerPage(itemsPerPage + SUM_MIN_ITEMS)
    setLoading(false)
  }

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <Container>
      <Searchbar
        placeholder="Procure os Medicamentos"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View>
        <FlatList
          ListHeaderComponent={() => (
            <View
              style={{
                paddingBottom: 2,
                marginBottom: 4,
                borderBottomWidth: 2,
                borderBottomColor: '#ccc',
              }}
            >
              <FlatList
                data={selectedItem}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <SelectableOption item={item} onPress={onRemoveSelection} defaultSelected />
                )}
              />
            </View>
          )}
          contentContainerStyle={{
            paddingBottom: 200,
          }}
          initialNumToRender={10}
          data={sliceData}
          onEndReached={loadData}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SelectableOption item={item} onPress={onChangeSelection} />}
        />
      </View>
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
