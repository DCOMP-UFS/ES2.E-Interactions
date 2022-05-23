/* eslint-disable react/display-name */
import * as React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { Modal, Portal } from 'react-native-paper'

import BottomSheetDrugAdd from '../bottom-sheet-drug-add'

export type ModalCustomProps = {
  showModal: () => void
  hideModal: () => void
  toggleModal: () => void
  visible: boolean
}

export type RefPropsModal = {
  current: ModalCustomProps
}

const ModalAddDrug = React.forwardRef((props, ref: RefPropsModal) => {
  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const toggleModal = () => setVisible((state) => !state)

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor: '#fff',
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
          <BottomSheetDrugAdd hide={hideModal} />
        </View>
      </Modal>
    </Portal>
  )
})

export default ModalAddDrug
