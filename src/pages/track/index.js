import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-parallax'

import MainLayout from 'layouts/MainLayout'
import Section from 'components/Section'
import SongItemH from 'components/SongItemH'

import useSpotify from 'hooks/useSpotify'

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
  const { spotifyApi } = useSpotify()

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
