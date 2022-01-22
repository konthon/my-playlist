import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-parallax'

import MainLayout from 'layouts/MainLayout'
import Section from 'components/Section'
import SongItemH from 'components/SongItemH'

import { useSpotifyContext } from 'contexts/spotifyContext'
import useTitlebar from 'hooks/useTitlebar'

const TITLE = 'Top Tracks'

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
  const { intersectRef, opacity } = useTitlebar()
  const { spotifyApi } = useSpotifyContext()

  const [topTrack, setTopTrack] = useState([])
  const [topTrack2, setTopTrack2] = useState([])
  const [topTrack3, setTopTrack3] = useState([])

  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: 5, offset: 0, time_range: 'short_term' })
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

  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: 5, offset: 0, time_range: 'medium_term' })
      .then(
        function (data) {
          console.log('Top Tracks', data.items)
          setTopTrack2(data.items)
        },
        function (err) {
          console.error(err)
        }
      )
  }, [])

  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: 5, offset: 0, time_range: 'long_term' })
      .then(
        function (data) {
          console.log('Top Tracks', data.items)
          setTopTrack3(data.items)
        },
        function (err) {
          console.error(err)
        }
      )
  }, [])

  return (
    <MainLayout title={TITLE} opacity={opacity}>
      <Parallax
        bgImage={
          topTrack3?.[0]?.album?.images?.find((item) => item.height > 500).url
        }
        alt='cover'
        strength={200}
        blur={{ min: -20, max: 20 }}
      >
        <div
          style={{
            height: 375,
            backdropFilter: 'brightness(0.8)',
            background: `rgba(54, 64, 49, ${opacity * 1.2})`,
          }}
          ref={intersectRef}
        >
          <Title>{TITLE}</Title>
        </div>
      </Parallax>
      <ContentWrapper>
        <Section title='All Time'>
          <SongListWrapper>
            {topTrack3.length > 0 &&
              topTrack3.map((track, index) => (
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
        <br></br>
        <Section title='Last 6 Months'>
          <SongListWrapper>
            {topTrack2.length > 0 &&
              topTrack2.map((track, index) => (
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
        <br></br>
        <Section title='Last 4 Weeks'>
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
