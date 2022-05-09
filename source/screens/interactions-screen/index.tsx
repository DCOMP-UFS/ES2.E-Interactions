import React from 'react'
import { Button } from 'react-native'

import InputSearchDropdown from '@/components/organism/input-search-dropdown'

import { Container, ContainerButtons, ContainerSearch } from './styles'

const InteractionsScreen = () => {
  const [selectedItem, setSelectedItem] = React.useState([])

  return (
    <Container>
      <ContainerSearch>
        <InputSearchDropdown />
      </ContainerSearch>
      <ContainerButtons>
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

export default InteractionsScreen
