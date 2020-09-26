import React from 'react'

import styled from 'styled-components/native'
import Avatar from './Avatar'

import {Entypo, Feather, EvilIcons} from '@expo/vector-icons'

import user1 from '../../assets/user1.jpg'

const Container = styled.View`
  width: 100%;
  /* height: 550px; */
  background: #fff;
  margin: 2px 0;
`
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`
const Column = styled.View`
  flex-direction: column;
  align-items: flex-start;
`
const NameUser = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`

const Tempo = styled.Text`
  font-size: 12px;
  color: #BDBDBD;
  margin: 0 5px;
`
const ImageFeed = styled.Image`
  width: 100%;
  height: 400px;
`
const Description = styled.Text`
  font-size: 16px;
  color: #000;
  width: 80%;
  padding-left: 8px;
`

const Feed = ({img}) => {
  return (
    <Container>
      <Row>
        <Row>
          <Avatar source={user1}/>
          <Column>
            <NameUser>Dany Ferreira</NameUser>
            <Row>
              <Tempo>5h</Tempo>
              <Entypo name='globe' size={16} color='#9E9E9E'/>
            </Row>
          </Column>
        </Row>

        <Entypo style={{marginRight: 10}} name='dots-three-horizontal' size={24} color='#9E9E9E'/>
      </Row>

      <Row>
        <Description>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria 
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
        quando um impressor desconhecido pegou uma bandeja de tipos e os 
        embaralhou para fazer um livro de modelos de tipos.
        </Description>
      </Row>

      <Row>
        <ImageFeed source={img} />
      </Row>
      <Row style={{justifyContent: 'flex-start', alignItems: 'center', marginLeft: 10}}>
        <Entypo name='heart' size={28} color='#C62828'/>
        <EvilIcons name='like' size={35} color='#3a86e9'/>
        <Tempo>26</Tempo>
      </Row>

      <Row style={{borderTopWidth: 1, borderColor: '#E0E0E0', marginLeft: 8, marginRight: 8}}>
        <Row>
          <EvilIcons name='like' size={35} color='#9E9E9E'/>
          <Tempo style={{fontWeight: 'bold', fontSize: 14, color: '#9E9E9E'}}>Curtir</Tempo>
        </Row>
        <Row>
          <Feather name='message-square' size={22} color='#9E9E9E'/>
          <Tempo style={{fontWeight: 'bold', fontSize: 14, color: '#9E9E9E'}}>Comentar</Tempo>
        </Row>
        <Row>
          <Entypo name='forward' size={22} color='#9E9E9E'/>
          <Tempo style={{fontWeight: 'bold', fontSize: 14, color: '#9E9E9E'}}>Compartilhar</Tempo>
        </Row>
      </Row>
    </Container>
  )
}

export default Feed