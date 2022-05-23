import React from 'react'
import { TouchableHighlight } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { Container, Title } from './styles'

type Props = {
  onPress?: () => void
  title: string
}

const Header = ({ onPress, title }: Props) => {
  const onPressBack = () => {
    if (onPress) onPress()
  }

  return (
    <Container>
      <Title>{title}</Title>
      <TouchableHighlight
        onPress={onPressBack}
        style={{
          padding: 12,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <FontAwesome name="close" size={16} color="red" />
      </TouchableHighlight>
    </Container>
  )
}

export default Header
