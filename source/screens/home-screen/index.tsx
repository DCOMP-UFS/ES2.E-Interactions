import React from 'react'

import theme from '@/theme'
import BottomSheet from 'reanimated-bottom-sheet'

import BottomSheetDrugAdd from './components/bottom-sheet-drug-add'
import DrugCard from './components/drug-card'
import Fab from './components/fab'
import { Container } from './styles'

const HomeScreen = () => {
  const sheetRef = React.useRef(null)

  const onOpenButtonSheet = () => sheetRef.current.snapTo('80%')
  const onCloseButtonSheet = () => sheetRef.current.snapTo(0)

  return (
    <Container>
      <DrugCard />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[0, '80%']}
        borderRadius={10}
        enabledGestureInteraction
        renderContent={() => <BottomSheetDrugAdd closeButtonSheet={onCloseButtonSheet} />}
      />
      <Fab
        actions={[
          {
            icon: 'pill',

            color: theme.COLORS.APPCOLOR,
            label: 'Adicionar Medicamento',
            onPress: () => onOpenButtonSheet(),
          },
        ]}
      />
    </Container>
  )
}

export default HomeScreen
