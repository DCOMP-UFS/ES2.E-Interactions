/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { NativeScrollEvent, ScrollView, ScrollViewProps } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

import { ContainerActivityIndicator } from '@/components/organism/input-search-dropdown/styles'

type Props = {
  children: React.ReactNode
  onEndReached?: () => void
} & ScrollViewProps

const ViewList = React.forwardRef(({ children, onEndReached, ...rest }: Props, ref) => {
  const [isLoading, setIsLoading] = React.useState(true)

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 125
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
  }

  const renderFooter = () => {
    if (!isLoading) return null
    return (
      <ContainerActivityIndicator>
        <ActivityIndicator color={'#fff'} size="large" />
      </ContainerActivityIndicator>
    )
  }

  const endScroll = async ({ nativeEvent }: { nativeEvent: NativeScrollEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 50))
      onEndReached?.()
      setIsLoading(false)
    }
  }

  return (
    <ScrollView {...rest} onScroll={endScroll} scrollEventThrottle={0} nestedScrollEnabled>
      {children}
      {renderFooter()}
    </ScrollView>
  )
})

export default ViewList
