import { StyleProp, ViewStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import styled from 'styled-components/native'

export const Drug = styled.Text`
  flex: 5;
  width: 90%;
  font-size: ${RFValue(12)}px;
  font-weight: 600;
  font-variant: small-caps;
  text-transform: capitalize;
  color: #000;
`

export const CardPressable = ({ pressed }) =>
  ({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: pressed ? '#dfdfdf' : '#fff',
    padding: 16,
    borderRadius: 4,
    marginTop: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    elevation: 5,
  } as StyleProp<ViewStyle>)

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
`
