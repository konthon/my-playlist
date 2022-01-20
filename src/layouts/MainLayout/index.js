import React from 'react'
import styled from 'styled-components'

import TabBar from 'components/TabBar'
import Header from 'components/Header'
import Player from 'components/Player'

const Wrapper = styled.div`
  background-color: var(--background-elevated-highlight);
  min-height: 100vh;
`
const Container = styled.div`
  position: relative;
  /* max-width: 375px; */
  min-height: 100vh;
  background-color: var(--background-base);
  margin: 0 auto;
  padding-bottom: 100px;
`

const MainLayout = (props) => {
  const { children, title } = props
  return (
    <Wrapper>
      <Container>
        <Header>{title}</Header>
        <main>{children}</main>
        <Player.Mini title='Songsamsi' subtitle='AlbumName' />
        <TabBar />
      </Container>
    </Wrapper>
  )
}

export default MainLayout
