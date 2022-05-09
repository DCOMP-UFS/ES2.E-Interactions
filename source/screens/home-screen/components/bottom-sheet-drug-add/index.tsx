import React from 'react'
import { useWindowDimensions, View } from 'react-native'

import theme from '@/theme'
import { Feather } from '@expo/vector-icons'

import { PosicionarBotaoVolta, TituloUm } from './styles'

type Props = {
  closeButtonSheet: () => void
}

const ButtonSheetDrugAdd = ({ closeButtonSheet }: Props) => {
  const { height } = useWindowDimensions()

  return (
    <View
      style={{
        backgroundColor: theme.COLORS.BACKGROUND_BOTTOM_SHEET,
        height: height,
        padding: 16,
        margin: 12,
        borderRadius: 8,
      }}
    >
      <PosicionarBotaoVolta onPress={closeButtonSheet}>
        <Feather name="chevrons-down" size={32} color="black" />
        <TituloUm>Voltar</TituloUm>
      </PosicionarBotaoVolta>
    </View>
  )
}

export default ButtonSheetDrugAdd
