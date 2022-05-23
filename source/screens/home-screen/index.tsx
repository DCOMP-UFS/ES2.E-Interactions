import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/reducers'
import theme from '@/theme'

import DrugCard from '@/components/molecule/drug-card'
import Fab from '@/components/molecule/fab'
import ModalAddDrug, { ModalCustomProps } from '@/components/organism/modal-add-drug'

import { Container } from './styles'

const HomeScreen = () => {
  const refModal = useRef<ModalCustomProps>(null)
  const drugs = useSelector((state: RootState) => state.drugs)

  const renderItem = () => {
    return drugs.map((drug) => <DrugCard key={drug.rxcui} name={drug.name} rxcui={drug.rxcui} />)
  }

  return (
    <Container>
      {renderItem()}
      <ModalAddDrug ref={refModal} />

      <Fab
        actions={[
          {
            icon: 'pill',
            color: theme.COLORS.APPCOLOR,
            label: 'Adicionar Medicamento',
            onPress: () => refModal.current.showModal(),
          },
        ]}
      />
    </Container>
  )
}

export default HomeScreen
