import React, { useRef, useState } from 'react'
import { Button } from 'react-native-paper'

import allConcepts from '@/data/all-concepts.json'

import InputSearchDropdown, {
  InputSearchDropdownProps,
} from '@/components/organism/input-search-dropdown'
import ModalCustom, { ModalCustomProps } from '@/components/organism/modal'

import api from '@/services/api'
import requests from '@/services/requests'

import { Container, ContainerButtons } from './styles'
import { Interactions, FullInteractionsTypeGroup } from './type'

const drugs = allConcepts.minConceptGroup.minConcept

const filteredHighInteraction = (fullInteractions: Array<FullInteractionsTypeGroup>) => {
  if (!fullInteractions)
    return { severity: '', description: 'Não foi possível encontrar informações sobre severidade' }

  const interactionsPairs = fullInteractions?.map((fullInteractionsTypeGroup) => {
    const { fullInteractionType } = fullInteractionsTypeGroup
    const { interactionPair } = fullInteractionType[0]
    return interactionPair.map((interactionPair) => {
      const { description, severity } = interactionPair
      return { description, severity }
    })
  })

  const interactionsHigh = interactionsPairs
    .flat()
    .filter((interaction) => interaction.severity === 'high')

  if (interactionsHigh.length === 0) return interactionsPairs[0][0]

  return interactionsHigh[0]
}

const InteractionsScreen = () => {
  const [severity, setSeverity] = useState({
    severity: '',
    description: '',
  })
  const [selectedDrugs, setSelectedDrugs] = useState([])

  const ref = useRef<InputSearchDropdownProps>(null)
  const refModal = useRef<ModalCustomProps>()

  const onSelect = (items: Array<{ name: string; rxcui: string }>) => {
    setSelectedDrugs(items)
  }

  const handleInteraction = async () => {
    const { data } = await fetchInteractions()

    const { fullInteractionTypeGroup } = data as Interactions
    setSeverity(filteredHighInteraction(fullInteractionTypeGroup))
    refModal.current.showModal()
  }

  async function fetchInteractions() {
    const drugs = selectedDrugs.map(({ rxcui }) => rxcui).join('+')
    const url = requests.obtainDrugApi + drugs

    return await api(url)
  }

  return (
    <Container>
      <InputSearchDropdown items={drugs} onSelect={onSelect} ref={ref} maxSelected={2} />
      <ContainerButtons>
        <Button onPress={handleInteraction} disabled={!(selectedDrugs.length === 2)}>
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
      <ModalCustom
        ref={refModal}
        severity={severity}
        medicamento1={selectedDrugs[0]?.name || ''}
        medicamento2={selectedDrugs[1]?.name || ''}
      />
    </Container>
  )
}

export default InteractionsScreen
