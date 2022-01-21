import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Background, Parallax } from 'react-parallax'

import MainLayout from 'layouts/MainLayout'
import FollowButton from 'components/FollowButton'
import PlayButton from 'components/PlayButton'
import Section from 'components/Section'
import SongItemH from 'components/SongItemH'

import { ReactComponent as MoreIcon } from 'icons/more.svg'
import AboutCard from 'components/AboutCard'
import SpotifyWebAPI from 'spotify-web-api-js'

const TITLE = 'Top Tracks'
const COVER =
  'https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/271790847_1284941788656200_7664182311771782744_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFycoKXGH0vkx5nmI78j7gvWp5OeQYFPbZank55BgU9tncFfTeAtQKdOWWmhN8gJ_LEb_T_9vXPZmFtmlT6Qja1&_nc_ohc=mDeGDuZGcVcAX_4IiaB&tn=jarqpZDyQpoO5FCF&_nc_ht=scontent.fbkk2-8.fna&oh=03_AVIFOv0y0w_MxAv7fMQY3xotQwIJ_bfBR0gDZlnhgw6aPg&oe=620F2D0D'

const StickyWrapper = styled.div`
  z-index: 1080;
  position: sticky;
  top: 32px;
  right: 0;
  .play-button-wrapper {
    position: absolute;
    right: 0;
  }
`
const ContentWrapper = styled.div`
  padding: 16px;
  .action-section {
    .action-section__buttons {
      .more-icon {
        color: var(--text-subdued);
        transform: rotate(90deg);
        position: relative;
        top: 6px;
        left: 16px;
      }
    }
  }
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 52px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 16px);
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding-left: 16px;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.25));
`
const ListenerCount = styled.div`
  color: var(--text-subdued);
  font-size: 14px;
  margin-bottom: 8px;
`

const SongListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TrackPage = () => {
  const authEndpoint = 'https://accounts.spotify.com/authorize'
  const redirectUri = window.location.origin + '/'
  const clientId = 'a2a3e83d58b845d5ae090687dec54ade'
  const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
  ]
  const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`
  const spotifyApi = new SpotifyWebAPI({
    clientId: 'a2a3e83d58b845d5ae090687dec54ade',
    clientSecret: '2dc3ae95a2e941788a26aee7875c81f9',
    redirectUri: '',
  })
  console.log(loginUrl)
  spotifyApi.setAccessToken(
    'BQDzQY2CluVzHQRm2l3Cda3EjSvUe95u0ctIxtYWa3SWy9SCzL2KSpoIBnyzYzCS7buGgFP1GgEkE72HV3tViBQaco2E0JE5fjkwk0ipkuwTh-iANar1LJ7Xe-QQXc0-35Fyydrz1LXj0UHN5ZeI89tGQdX3pqQuBN5Gc5xzFEwuqn7vtBeV'
  )

  const [topTrack, setTopTrack] = useState([])

  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: 10, offset: 0, time_range: 'medium_term' })
      .then(
        function (data) {
          console.log('Top Tracks', data.items)
          setTopTrack(data.items)
        },
        function (err) {
          console.error(err)
        }
      )
  }, [])

  return (
    <MainLayout title={TITLE}>
      <Parallax
        bgImage={
          topTrack?.[0]?.album?.images?.find((item) => item.height > 500).url
        }
        bgImageStyle={{
          paddingLeft: '60px',
          marginTop: '-50px',
        }}
        alt='cover'
        strength={200}
        blur={{ min: -20, max: 20 }}
      >
        <div style={{ height: 375, backdropFilter: 'brightness(0.8)' }}>
          <Title>{TITLE}</Title>
        </div>
      </Parallax>
      <ContentWrapper>
        <Section title='Last 6 Months'>
          <SongListWrapper>
            {topTrack.length > 0 &&
              topTrack.map((track, index) => (
                <SongItemH
                  key={track.id}
                  index={index + 1}
                  title={track.name}
                  subtitle={track.artists[0].name}
                  cover={
                    track.album.images.find((item) => item.height < 200).url
                  }
                />
              ))}
          </SongListWrapper>
        </Section>
      </ContentWrapper>
    </MainLayout>
  )
}

export default TrackPage
