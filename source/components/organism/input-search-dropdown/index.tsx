/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Button, FlatList, View } from 'react-native'
import { Searchbar } from 'react-native-paper'

import SelectableOption from '@/components/molecule/selectable-option'

import { Container, ContainerButtons } from './styles'

const terms = [
  {
    id: 1,
    name: 'name 1',
  },
  {
    id: 2,
    name: 'name 2',
  },
  {
    id: 3,
    name: 'name 3',
  },
  {
    id: 4,
    name: 'name 4',
  },
  {
    id: 5,
    name: 'name 5',
  },
  {
    id: 6,
    name: 'name 6',
  },
  {
    id: 7,
    name: 'name 7',
  },
  {
    id: 8,
    name: 'name 8',
  },
  {
    id: 9,
    name: 'name 9',
  },
  {
    id: 10,
    name: 'name 10',
  },
  {
    id: 11,
    name: 'name 2',
  },
  {
    id: 12,
    name: 'name 3',
  },
]

const InputSearchDropdown = () => {
  const [data, setData] = useState(
    terms.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
  )
  const [searchQuery, setSearchQuery] = useState('')

  const [selectedItem, setSelectedItem] = useState([])

  const onChangeSearch = (query: string) => setSearchQuery(query)

  useEffect(() => {
    setData(() => {
      const searchLowerCase = searchQuery.toLowerCase()
      const newDataAll = terms.filter((item) => item.name.toLowerCase().includes(searchLowerCase))
      const filtered = newDataAll.filter((item) => !selectedItem.includes(item))
      return filtered
    })
  }, [searchQuery])

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
          data={data}
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
