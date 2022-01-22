import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-parallax'

import MainLayout from 'layouts/MainLayout'
import Section from 'components/Section'
import SongItemH from 'components/SongItemH'

import useSpotify from 'hooks/useSpotify'
import useTitlebar from 'hooks/useTitlebar'
import { useSpotifyContext } from 'contexts/spotifyContext'

const TITLE = 'Top Artists'

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

const SongListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ArtistPage = () => {
  const { intersectRef, opacity } = useTitlebar()
  const { spotifyApi } = useSpotifyContext()

  const [topArtist, setTopArtist] = useState([])
  const [topArtist2, setTopArtist2] = useState([])
  const [topArtist3, setTopArtist3] = useState([])

  useEffect(() => {
    spotifyApi
      .getMyTopArtists({ limit: 5, offset: 0, time_range: 'short_term' })
      .then(
        function (data) {
          console.log('Top Artists', data.items)
          setTopArtist(data.items)
        },
        function (err) {
          console.error(err)
        }
      )
    spotifyApi
      .getMyTopArtists({ limit: 5, offset: 0, time_range: 'medium_term' })
      .then(
        function (data) {
          console.log('Top Artists', data.items)
          setTopArtist2(data.items)
        },
        function (err) {
          console.error(err)
        }
      )
    spotifyApi
      .getMyTopArtists({ limit: 5, offset: 0, time_range: 'long_term' })
      .then(
        function (data) {
          console.log('Top Artists', data.items)
          setTopArtist3(data.items)
        },
        function (err) {
          console.error(err)
        }
      )
  }, [])

  return (
    <MainLayout title={TITLE} opacity={opacity}>
      <Parallax
        bgImage={topArtist3?.[0]?.images?.find((item) => item.height > 500).url}
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
            {topArtist3.length > 0 &&
              topArtist3.map((artist, index) => (
                <SongItemH
                  key={artist.id}
                  index={index + 1}
                  title={artist.name}
                  subtitle={artist.genres[0]}
                  cover={artist.images.find((item) => item.height < 200).url}
                />
              ))}
          </SongListWrapper>
        </Section>
        <br></br>
        <Section title='Last 6 Months'>
          <SongListWrapper>
            {topArtist2.length > 0 &&
              topArtist2.map((artist, index) => (
                <SongItemH
                  key={artist.id}
                  index={index + 1}
                  title={artist.name}
                  subtitle={artist.genres[0]}
                  cover={artist.images.find((item) => item.height < 200).url}
                />
              ))}
          </SongListWrapper>
        </Section>
        <br></br>
        <Section title='Last 4 Weeks'>
          <SongListWrapper>
            {topArtist.length > 0 &&
              topArtist.map((artist, index) => (
                <SongItemH
                  key={artist.id}
                  index={index + 1}
                  title={artist.name}
                  subtitle={artist.genres[0]}
                  cover={artist.images.find((item) => item.height < 200).url}
                />
              ))}
          </SongListWrapper>
        </Section>
      </ContentWrapper>
    </MainLayout>
  )
}

export default ArtistPage
