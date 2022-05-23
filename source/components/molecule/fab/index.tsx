import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { FAB } from 'react-native-paper'
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon'

import theme from '@/theme'

type Props = {
  actions: {
    icon: IconSource
    label?: string
    color?: string
    labelTextColor?: string
    accessibilityLabel?: string
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<ViewStyle>
    small?: boolean
    onPress: () => void
    testID?: string
  }[]
}

const Fab = ({ actions }: Props) => {
  const [open, setOpen] = React.useState(false)

  const toggleFab = () => {
    setOpen((state) => !state)
  }

  return (
    <FAB.Group
      visible
      fabStyle={{
        backgroundColor: theme.COLORS.APPCOLOR,
      }}
      color={theme.COLORS.PRIMARY}
      open={open}
      icon={open ? 'close' : 'plus'}
      actions={actions}
      onStateChange={toggleFab}
    />
  )
}

export default Fab
