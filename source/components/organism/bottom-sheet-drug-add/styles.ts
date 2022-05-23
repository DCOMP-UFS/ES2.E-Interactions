import theme from '@/theme'
import styled from 'styled-components/native'

export const PosicionarBotaoVolta = styled.TouchableOpacity`
  align-items: flex-start;
  width: 32px;
  flex-direction: row;
`

export const Container = styled.View`
  height: 100%;
  background-color: ${theme.COLORS.BACKGROUND_BOTTOM_SHEET};
  padding: 2px;
  margin: 4px;
  margin-top: 12px;
  border-radius: 8px;
`
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1d1d1d;
  font-variant: small-caps;
  text-align: center;
`
