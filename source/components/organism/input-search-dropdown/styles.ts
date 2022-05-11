import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  position: relative;
  height: 100%;
  width: 100%;
`
export const ContainerButtons = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  max-height: 50px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

export const ContainerActivityIndicator = styled.View`
  padding-vertical: 20px;
  justify-content: center;
  align-items: center;
`
