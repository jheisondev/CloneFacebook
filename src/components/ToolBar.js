import React from 'react'

import styled from 'styled-components/native'

import { Ionicons } from '@expo/vector-icons'
import Avatar from './Avatar'

import user1 from '../../assets/user1.jpg'


const Container = styled.View`
  width: 100%;
  height: 110px;
  background: #fff;
  justify-content: center;
`
const Row = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`
const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  margin-left:5px;
  padding: 0 8px;
  border: 1px solid #E0E0E0;
  border-radius: 25px;
`
const Divider = styled.View`
  width: 100%;
  height: 0.5px;
`
const Menu = styled.View`
  flex: 1;
  padding-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`
const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`
const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`

const ToolBar = () => {
  return (
    <Container>
      <Row>
        <Avatar source={user1} />
        <Input
          placeholder='Whats on your mind?'
        />
      </Row>
      <Divider/>
      <Row>
        <Menu>
          <Ionicons name='ios-videocam' size={26} color='#f44337' />
          <MenuText>Live</MenuText>
        </Menu>
        <Separator/>
        <Menu>
          <Ionicons name='md-images' size={26} color='#00C853' />
          <MenuText>Foto</MenuText>
        </Menu>
        <Separator/>
        <Menu>
          <Ionicons name='md-videocam' size={26} color='#673AB7' />
          <MenuText>Sala</MenuText>
        </Menu>
      </Row>
      
    </Container>
  )
}

export default ToolBar