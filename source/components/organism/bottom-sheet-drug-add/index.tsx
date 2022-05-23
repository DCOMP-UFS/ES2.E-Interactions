import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import allConcepts from '@/data/all-concepts.json'
import { drugAdded } from '@/reducers/reducers/drugs/drugs-slice'

import SelectableOption from '@/components/molecule/selectable-option'
import InputSearchDropdownSheet, {
  InputSearchDropdownProps,
} from '@/components/organism/input-search-dropdown-sheet'

import { Container, Title } from './styles'

const drugs = allConcepts.minConceptGroup.minConcept

type Props = {
  hide?: () => void
}

const ButtonSheetDrugAdd = ({ hide }: Props) => {
  const [selectedDrugs, setSelectedDrug] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      setSelectedDrug(null)
    }
  }, [])

  const ref = useRef<InputSearchDropdownProps>(null)

  const onChangeSelected = (drug: any) => {
    setSelectedDrug(drug)
  }

  const addDrugsDispatch = () => {
    if (selectedDrugs) {
      dispatch(drugAdded(selectedDrugs))
      hide?.()
    }
  }

  return (
    <Container>
      <Title>Adicionar Medicamento</Title>
      <InputSearchDropdownSheet
        items={drugs}
        ref={ref}
        onChangeSelected={onChangeSelected}
        selected={selectedDrugs}
      />
      {selectedDrugs && (
        <View>
          <SelectableOption
            key={selectedDrugs.rxcui}
            item={selectedDrugs}
            isIcon={false}
            onPress={() => ref.current.onRemoveSelection()}
          />
        </View>
      )}
      <Button disabled={!selectedDrugs} onPress={addDrugsDispatch}>
        Adicionar
      </Button>
    </Container>
  )
}

export default ButtonSheetDrugAdd
