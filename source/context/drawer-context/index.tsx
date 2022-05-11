/* eslint-disable react/prop-types */
import React, { createContext, useContext, useRef } from 'react'
import { DrawerLayout, DrawerPosition } from 'react-native-gesture-handler'

import { FontAwesome } from '@expo/vector-icons'

import { Container, Button, ButtonContainer } from './styles'

type Drawer = {
  openDrawer: () => void
  closeDrawer: () => void
}

const DrawerContext = createContext({} as Drawer)

type Props = {
  children: React.ReactNode
}

const DrawerProvider = (props: Props) => {
  const drawer = useRef<DrawerLayout>()

  const openDrawer = () => {
    drawer.current?.openDrawer()
  }

  const closeDrawer = () => {
    drawer.current?.closeDrawer()
  }

  const renderDrawer = () => {
    return (
      <Container>
        <ButtonContainer>
          <Button onPress={closeDrawer}>
            <FontAwesome
              name="arrow-left"
              size={24}
              color="#000"
              style={{
                padding: 12,
              }}
            />
          </Button>
        </ButtonContainer>
      </Container>
    )
  }

  const Drawer = () => {
    return (
      <DrawerLayout
        ref={drawer}
        drawerWidth={250}
        drawerPosition={DrawerLayout.positions.Left as DrawerPosition}
        drawerType="slide"
        drawerBackgroundColor="#f0f0f0"
        renderNavigationView={renderDrawer}
      >
        {props.children}
      </DrawerLayout>
    )
  }

  return (
    <DrawerContext.Provider
      value={{
        openDrawer,
        closeDrawer,
      }}
    >
      <Drawer />
    </DrawerContext.Provider>
  )
}

export default DrawerProvider

export const useDrawer = (): Drawer => {
  return useContext(DrawerContext)
}
