import React, { useRef } from 'react'
import { Button } from 'react-native-paper'

import allConcepts from '@/data/all-concepts.json'

import InputSearchDropdown, {
  InputSearchDropdownProps,
} from '@/components/organism/input-search-dropdown'

import { Container, ContainerButtons } from './styles'

const drugs = allConcepts.minConceptGroup.minConcept

const InteractionsScreen = () => {
  const selectedDrugs = useRef<Array<{ name: string; id: string }>>([])

  const ref = useRef<InputSearchDropdownProps>(null)

  const onSelect = (items: Array<{ name: string; id: string }>) => {
    selectedDrugs.current = items
  }

  return (
    <Container>
      <InputSearchDropdown items={drugs} onSelect={onSelect} ref={ref} />
      <ContainerButtons>
        <Button
          onPress={() => {
            console.log(selectedDrugs.current)
          }}
        >
          Interagir
        </Button>
        <Button
          onPress={() => {
            ref.current?.onClearItems()
          }}
        >
          Dispensar
        </Button>
      </ContainerButtons>
    </Container>
  )
}

export default InteractionsScreen
