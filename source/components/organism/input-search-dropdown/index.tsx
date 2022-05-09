/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'

import { Card, Container, ContainerList, CardContentText, FlatListCard } from './styles'

const MIN_VALUE_HEIGHT = 10

const terms = [
  {
    id: 1,
    term: 'term 1',
  },
  {
    id: 2,
    term: 'term 2',
  },
  {
    id: 3,
    term: 'term 3',
  },
  {
    id: 4,
    term: 'term 1',
  },
  {
    id: 5,
    term: 'term 2',
  },
  {
    id: 6,
    term: 'term 3',
  },
  {
    id: 7,
    term: 'term 1',
  },
  {
    id: 8,
    term: 'term 2',
  },
  {
    id: 9,
    term: 'term 3',
  },
  {
    id: 10,
    term: 'term 1',
  },
  {
    id: 11,
    term: 'term 2',
  },
  {
    id: 12,
    term: 'term 3',
  },
]

const InputSearchDropdown = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [focus, setFocus] = useState(true)
  const [searchExist, setSearchExist] = useState(false)
  const [height, setHeight] = useState(0)

  const onChangeSearch = (query: string) => setSearchQuery(query)

  const onClose = () => setFocus(false)
  const onOpen = () => setFocus(true)

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setSearchExist(true)
    } else {
      setSearchExist(false)
    }
  }, [searchQuery])

  return (
    <Container>
      <Searchbar
        onLayout={(props) => {
          setHeight(props.nativeEvent.layout.height)
        }}
        placeholder="Procure os Medicamentos"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onFocus={onOpen}
        onBlur={onClose}
      />
      {focus || searchExist ? (
        <ContainerList top={height + MIN_VALUE_HEIGHT}>
          <FlatListCard
            data={terms}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card>
                <CardContentText>{item.term}</CardContentText>
                <TouchableOpacity>
                  <Text>+</Text>
                </TouchableOpacity>
              </Card>
            )}
          />
        </ContainerList>
      ) : null}
    </Container>
  )
}

export default InputSearchDropdown
