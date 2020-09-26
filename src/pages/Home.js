import React from 'react'
import styled from 'styled-components'

import { ScrollView, TouchableOpacity } from 'react-native'

import ToolBar from '../components/ToolBar'
import Avatar from '../components/Avatar'
import Feed from '../components/Feed'

import {MaterialIcons} from '@expo/vector-icons'

import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
import user5 from '../../assets/user5.jpg'

const Container = styled.View`
  width: 100%;
`
const ContainerSalas = styled.View`
  height: 70px;
  background: #fff;
  margin-top: 8px;
`
const ButtonRoom = styled.TouchableOpacity`
  flex-direction: row;
  width: 90px;
  height: 44px;
  border: 1px solid #B3E5FC;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`
const Collumn = styled.View`
  flex-direction: column;
  margin-left: 3px;
`
const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #09f;
`
const ContainerStory = styled.View`
  height: 240px;
  background: #fff;
  margin: 8px 0 4px 0;
`
const CardFirst = styled.View`
  height: 210px;
  width: 120px;
  border-radius: 10px;
  align-items: center;
  margin-left: 12px;
  margin-right: 10px;
  background: #EEEEEE;
  border: 1px solid #BDBDBD;
`
const CardStory = styled.View`
  height: 210px;
  width: 120px;
  margin-right: 8px;
  border-radius: 10px;
  justify-content: space-between;
  background: #EEEEEE;
  border: 1px solid #BDBDBD;
`
const Image = styled.Image`
  height: 140px;
  width: 120px;
  border-radius: 10px;
`
const FooterView = styled.View`
  height: 60px;
  /* width: 100px; */
  align-items: center;
  justify-content: space-around;
  position: relative;
`
const TextStory = styled.Text`
  font-size: 12px;
  color: #000;
  text-align: center;
  padding-bottom: 10px;
`
const TextCardStory = styled(TextStory)`
  color: #fff;
  font-weight: bold;
`
const ImageStory = styled.Image`
  height: 210px;
  width: 120px;
  border-radius: 10px;
  position: absolute;
`
const AvatarStory = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #1976D2;
  margin: 5px;
`

const Home = () => {
  return (
    <>
    <Container>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{backgroundColor: '#E0E0E0'}}
      >
        
        <ToolBar></ToolBar>
        <ContainerSalas>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
          >
            <ButtonRoom>
              <MaterialIcons 
                name='video-call'
                size={26}
                color='#5E35B1'
              />
              <Collumn>
                <Text>Criar</Text>
                <Text>Sala</Text>
              </Collumn>
            </ButtonRoom>
            <Avatar source={user1}/>
            <Avatar source={user2}/>
            <Avatar source={user3}/>
            <Avatar source={user4}/>
            <Avatar source={user5}/>
            <Avatar source={user1}/>
            <Avatar source={user2}/>
            <Avatar source={user3}/>
            <Avatar source={user4}/>
            <Avatar source={user5}/>
          </ScrollView>
        </ContainerSalas>

        <ContainerStory>

          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
          >
            <CardFirst>
              <Image source={user5}/>
              <FooterView>
                <MaterialIcons style={{marginTop: -10, paddingBottom: 35}} name='add-circle' size={40} color='#09f'/>
                <TextStory>Criar um Story</TextStory>
              </FooterView>  
            </CardFirst>
            
            <CardStory>
              <ImageStory source={user1} />
              <AvatarStory source={user1}/>
              <TextCardStory>Dany Ferreira</TextCardStory>
            </CardStory>
            
            <CardStory>
              <ImageStory source={user5} />
              <AvatarStory source={user5}/>
              <TextCardStory>I'am Robot</TextCardStory>
            </CardStory>
            
            <CardStory>
              <ImageStory source={user3} />
              <AvatarStory source={user3}/>
              <TextCardStory>ReCreating</TextCardStory>
            </CardStory>
            
            <CardStory>
              <ImageStory source={user2} />
              <AvatarStory source={user2}/>
              <TextCardStory>Iza Fernandes</TextCardStory>
            </CardStory>
            
            <CardStory>
              <ImageStory source={user4} />
              <AvatarStory source={user4}/>
              <TextCardStory>Lucas Castro</TextCardStory>
            </CardStory>
            
            <CardStory>
              <ImageStory source={user1} />
              <AvatarStory source={user1}/>
              <TextCardStory>Dany Ferreira</TextCardStory>
            </CardStory>
            
            <CardStory>
              <ImageStory source={user2} />
              <AvatarStory source={user2}/>
              <TextCardStory>Iza Fernandes</TextCardStory>
            </CardStory>
          </ScrollView>

        </ContainerStory>

        <Feed img={user5}></Feed>
        <Feed img={user2}></Feed>
        <Feed img={user4}></Feed>
        <Feed img={user1}></Feed>
        <Feed img={user3}></Feed>

      </ScrollView>
    </Container>  
    </>
  )
}

export default Home