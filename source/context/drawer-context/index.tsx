/* eslint-disable react/prop-types */
import React, { createContext, useContext, useRef } from 'react'
import { View } from 'react-native'
import { DrawerLayout, DrawerPosition } from 'react-native-gesture-handler'

type Drawer = {
  openDrawer: () => void
  closeDrawer: () => void
}

const DrawerContext = createContext({} as Drawer)

type Props = {
  children: React.ReactNode
}

const DrawerProvider = (props: Props) => {
  const renderDrawer = () => {
    return <View />
  }
  const drawer = useRef<DrawerLayout>()

  const openDrawer = () => {
    drawer.current?.openDrawer()
  }

  const closeDrawer = () => {
    drawer.current?.closeDrawer()
  }

  const Drawer = () => {
    return (
      <DrawerLayout
        ref={drawer}
        drawerWidth={250}
        drawerLockMode="locked-closed"
        drawerPosition={DrawerLayout.positions.Left as DrawerPosition}
        drawerType="front"
        drawerBackgroundColor="#ddd"
        renderNavigationView={renderDrawer}
        //onDrawerSlide={handleDrawerSlide}
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
