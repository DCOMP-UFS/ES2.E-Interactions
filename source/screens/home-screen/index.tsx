import React from 'react'
import { StyleSheet } from 'react-native'

import theme from '@/theme'
import { FontAwesome5 } from '@expo/vector-icons'
import BottomSheet from 'reanimated-bottom-sheet'

import BottomSheetDrugAdd from './components/bottom-sheet-drug-add'
import Fab from './components/fab'
import { Container, CardContent, Button } from './styles'

const HomeScreen = () => {
  const sheetRef = React.useRef(null)

  const onOpenButtonSheet = () => sheetRef.current.snapTo('80%')
  const onCloseButtonSheet = () => sheetRef.current.snapTo(0)

  return (
    <Container>
      <CardContent>
        <Button title="Adicionar Medicamento" />
      </CardContent>
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
            icon: 'star',
            color: theme.COLORS.APPCOLOR,
            label: 'Star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: () => <FontAwesome5 name="pills" size={24} color={theme.COLORS.APPCOLOR} />,
            label: 'Interações',
            onPress: () => console.log('Pressed email'),
          },
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

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
