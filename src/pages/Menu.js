import React from 'react'
import styled from 'styled-components'
import AppBar from '../components/AppBar'
import ToolBar from '../components/ToolBar'

const Container = styled.View`
  width: 100%;
  height: 90px;
`

const Home = () => {
  return (
    <>
    <Container>
      <ToolBar></ToolBar>
    </Container>  
    </>
  )
}

export default Home