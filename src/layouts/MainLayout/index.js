import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TabBar from 'components/TabBar'
import Header from 'components/Header'
import Player from 'components/Player'
import { AnimatePresence } from 'framer-motion'
import useTitlebar from 'hooks/useTitlebar'
import { useSpotifyContext } from 'contexts/spotifyContext'

const Wrapper = styled.div`
  background-color: var(--background-elevated-highlight);
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom, 8px);
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
  const { spotifyApi } = useSpotifyContext()
  const [track, setTrack] = useState({})

  useEffect(() => {
    spotifyApi.getTrack('6pzLxfaOuXD6QxAkcKDukY?si=bcdbba30f85544c7').then(
      function (data) {
        console.log(data)
        setTrack(data)
      },
      function (err) {
        console.error(err)
      }
    )
  }, [])

  const data = {
    title: track.name || '',
    subtitle: track?.artists?.[0]?.name || '',
    cover: track?.album?.images?.find((item) => item.height > 500).url || '',
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
