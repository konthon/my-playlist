import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import TabBar from 'components/TabBar'
import Header from 'components/Header'
import Player from 'components/Player'
import { AnimatePresence } from 'framer-motion'
import useTitlebar from 'hooks/useTitlebar'

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
  const { children, title, opacity } = props
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)

  const data = {
    title: 'Songsamsi',
    subtitle: 'Album Name',
    cover: 'https://source.unsplash.com/random/300x300/',
  }

  return (
    <Wrapper>
      <Container>
        <Header opacity={opacity}>{title}</Header>
        <main>{children}</main>
        <AnimatePresence>
          {isOpenPlayer && (
            <Player
              title={data.title}
              subtitle={data.subtitle}
              cover={data.cover}
              onClose={() => setIsOpenPlayer(false)}
            />
          )}
        </AnimatePresence>
        <Player.Mini
          title={data.title}
          subtitle={data.subtitle}
          cover={data.cover}
          onOpen={() => setIsOpenPlayer(true)}
        />
        <TabBar />
      </Container>
    </Wrapper>
  )
}

export default MainLayout
