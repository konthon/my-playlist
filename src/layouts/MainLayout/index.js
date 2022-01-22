import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import TabBar from 'components/TabBar'
import Header from 'components/Header'
import Player from 'components/Player'
import usePlayback from 'hooks/usePlayback'
import WebPlayback from 'components/WebPlayback'
import { useSpotifyContext } from 'contexts/spotifyContext'

const track = {
  album: {
    album_type: 'ALBUM',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY',
        },
        href: 'https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY',
        id: '4dpARuHxo51G3z768sgnrY',
        name: 'Adele',
        type: 'artist',
        uri: 'spotify:artist:4dpARuHxo51G3z768sgnrY',
      },
    ],
    available_markets: [
      'AD',
      'AE',
      'AR',
      'AT',
      'AU',
      'BE',
      'BG',
      'BH',
      'BO',
      'BR',
      'CA',
      'CH',
      'CL',
      'CO',
      'CR',
      'CY',
      'CZ',
      'DE',
      'DK',
      'DO',
      'DZ',
      'EC',
      'EE',
      'EG',
      'ES',
      'FI',
      'FR',
      'GB',
      'GR',
      'GT',
      'HK',
      'HN',
      'HU',
      'ID',
      'IE',
      'IL',
      'IN',
      'IS',
      'IT',
      'JO',
      'JP',
      'KW',
      'LB',
      'LI',
      'LT',
      'LU',
      'LV',
      'MA',
      'MC',
      'MT',
      'MX',
      'MY',
      'NI',
      'NL',
      'NO',
      'NZ',
      'OM',
      'PA',
      'PE',
      'PH',
      'PL',
      'PS',
      'PT',
      'PY',
      'QA',
      'RO',
      'SA',
      'SE',
      'SG',
      'SK',
      'SV',
      'TH',
      'TN',
      'TR',
      'TW',
      'US',
      'UY',
      'VN',
      'ZA',
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/21jF5jlMtzo94wbxmJ18aa',
    },
    href: 'https://api.spotify.com/v1/albums/21jF5jlMtzo94wbxmJ18aa',
    id: '21jF5jlMtzo94wbxmJ18aa',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273c6b577e4c4a6d326354a89f7',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02c6b577e4c4a6d326354a89f7',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851c6b577e4c4a6d326354a89f7',
        width: 64,
      },
    ],
    name: '30',
    release_date: '2021-11-19',
    release_date_precision: 'day',
    total_tracks: 12,
    type: 'album',
    uri: 'spotify:album:21jF5jlMtzo94wbxmJ18aa',
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY',
      },
      href: 'https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY',
      id: '4dpARuHxo51G3z768sgnrY',
      name: 'Adele',
      type: 'artist',
      uri: 'spotify:artist:4dpARuHxo51G3z768sgnrY',
    },
  ],
  available_markets: [
    'AD',
    'AE',
    'AR',
    'AT',
    'AU',
    'BE',
    'BG',
    'BH',
    'BO',
    'BR',
    'CA',
    'CH',
    'CL',
    'CO',
    'CR',
    'CY',
    'CZ',
    'DE',
    'DK',
    'DO',
    'DZ',
    'EC',
    'EE',
    'EG',
    'ES',
    'FI',
    'FR',
    'GB',
    'GR',
    'GT',
    'HK',
    'HN',
    'HU',
    'ID',
    'IE',
    'IL',
    'IN',
    'IS',
    'IT',
    'JO',
    'JP',
    'KW',
    'LB',
    'LI',
    'LT',
    'LU',
    'LV',
    'MA',
    'MC',
    'MT',
    'MX',
    'MY',
    'NI',
    'NL',
    'NO',
    'NZ',
    'OM',
    'PA',
    'PE',
    'PH',
    'PL',
    'PS',
    'PT',
    'PY',
    'QA',
    'RO',
    'SA',
    'SE',
    'SG',
    'SK',
    'SV',
    'TH',
    'TN',
    'TR',
    'TW',
    'US',
    'UY',
    'VN',
    'ZA',
  ],
  disc_number: 1,
  duration_ms: 182163,
  explicit: false,
  external_ids: {
    isrc: 'USSM12105969',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/13CVSGLSFl4UxpDVR6u3dq',
  },
  href: 'https://api.spotify.com/v1/tracks/13CVSGLSFl4UxpDVR6u3dq',
  id: '13CVSGLSFl4UxpDVR6u3dq',
  is_local: false,
  name: 'Strangers By Nature',
  popularity: 80,
  preview_url:
    'https://p.scdn.co/mp3-preview/6a4c8a7cccf121cfee1dfe71a37723b5970a76fc?cid=a2a3e83d58b845d5ae090687dec54ade',
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:13CVSGLSFl4UxpDVR6u3dq',
}

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

  const { accessToken } = useSpotifyContext()

  // const { player, current_track, setTrack, is_active } = usePlayback()
  const current_track = {
    name: '',
    album: {
      images: [{ url: '' }],
    },
    artists: [{ name: '' }],
  }

  // useEffect(() => {
  //   setTrack(track)
  // }, [])

  const data = {
    title: current_track.name,
    subtitle: current_track.artists[0].name,
    cover: current_track.album.images[0].url,
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
        {/* {is_active && (
          <Player.Mini
            title={data.title}
            subtitle={data.subtitle}
            cover={data.cover}
            onOpen={() => setIsOpenPlayer(true)}
            onTogglePlay={() => player.togglePlay()}
          />
        )} */}
        <WebPlayback token={accessToken} />
        <TabBar />
      </Container>
    </Wrapper>
  )
}

export default MainLayout
