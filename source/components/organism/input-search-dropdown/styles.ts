import { RFValue } from 'react-native-responsive-fontsize'

import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  position: relative;
  height: 100%;
  width: 100%;
`

type PropsContainerList = {
  top: number
}

export const ContainerList = styled.View<PropsContainerList>`
  position: absolute;
  top: ${({ top }) => top}px;
  width: 100%;
`

export const Card = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.COLORS.BACKGROUND_BOTTOM_SHEET};
  padding: 20px;
  margin-inline: 8px;
  margin-block: 4px;
  border-bottom-width: 2px;
  border-bottom-color: #ccc;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`

export const CardContentText = styled.Text`
  font-size: ${RFValue(12)}px;
`

export const FlatListCard = styled.FlatList`
  flex: 1;
  max-height: 50vh;
`
