/* eslint-disable react/display-name */
import * as React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { Modal, Portal } from 'react-native-paper'

import { Title, Severity, Description, Subtitle } from './styles'

export type ModalCustomProps = {
  showModal: () => void
  hideModal: () => void
  toggleModal: () => void
  visible: boolean
}

export type RefPropsModal = {
  current: ModalCustomProps
}

type Props = {
  severity: {
    severity: string
    description: string
  }
  medicamento1: string
  medicamento2: string
}

const ModalCustom = React.forwardRef(
  ({ severity, medicamento1, medicamento2 }: Props, ref: RefPropsModal) => {
    const [visible, setVisible] = React.useState(false)
    const [informationSeverity, setInformationSeverity] = React.useState(null)
    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)
    const toggleModal = () => setVisible((state) => !state)

    React.useEffect(() => {
      setInformationSeverity(severity)
      return () => setInformationSeverity(null)
    }, [severity])

    const backgroundColor = severity.severity === 'high' ? 'red' : 'white'
    
    const containerStyle: StyleProp<ViewStyle> = {
      backgroundColor: backgroundColor,
      padding: 16,
      width: '80%',
      height: '75%',
      alignSelf: 'center',
      borderRadius: 8,
    }

    ref.current = {
      visible,
      showModal,
      hideModal,
      toggleModal,
    }

    if (!visible) return null

    return (
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View
            style={{
              flex: 1,
            }}
          >
            <View style={{ flex: 0.3 }}>
              <Title>Interação</Title>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View
                style={{
                  marginBottom: 16,
                }}
              >
                <Text>{medicamento1}</Text>
                <Text>{medicamento2}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '100%',
                  marginBottom: 8,
                }}
              >
                <Subtitle>Severidade:</Subtitle>
                <Severity>{informationSeverity.severity}</Severity>
              </View>
              <View style={{ flexWrap: 'wrap' }}>
                <Subtitle style={{ textAlign: 'center', marginBottom: 4 }}>Descrição</Subtitle>
                <View>
                  <Description>{informationSeverity.description}</Description>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </Portal>
    )
  }
)

export default ModalCustom
