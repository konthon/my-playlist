import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-parallax'

import MainLayout from 'layouts/MainLayout'
import AboutCard from 'components/AboutCard'
import FollowButton from 'components/FollowButton'
import PlayButton from 'components/PlayButton'
import Section from 'components/Section'
import SongItemH from 'components/SongItemH'
import useSpotify from 'hooks/useSpotify'

import useTitlebar from 'hooks/useTitlebar'
import { useSpotifyContext } from 'contexts/spotifyContext'

import { ReactComponent as MoreIcon } from 'icons/more.svg'

const TITLE = 'PAIRPITCH'
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

const PlaylistPage = () => {
  const { spotifyApi } = useSpotify()
  const { intersectRef, opacity } = useTitlebar()

  useSpotifyContext()

  const popularSongs = [
    {
      cover:
        'https://images.genius.com/c9637dd9f483dfac5ac514f3bab33c51.600x600x1.jpg',
      title: 'Happy Fabulous Birthday',
      subtitle: '23,356,835',
    },
    {
      cover:
        'https://s.isanook.com/jo/0/rp/rc/w300h300/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wL2Y5ZjU2ZjA3YmRhNmU5MGIvNjQwLmpwZw==.jpg',
      title: 'Wish You All The Good Things',
      subtitle: '2,760,678',
    },
    {
      cover: 'https://i1.sndcdn.com/artworks-Pwscy9pi2fO9-0-t500x500.jpg',
      title: 'Be Healthy and Happy',
      subtitle: '1,452,376',
    },
    {
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg',
      title: 'May This Year',
      subtitle: '1,578,647',
    },
    {
      cover:
        'https://media.pitchfork.com/photos/5db364230c9c6a0008f6ba60/1:1/w_600/Turnover_Altogether.jpg',
      title: 'Special As You Are',
      subtitle: '998,416',
    },
  ]

  return (
    <MainLayout title={TITLE} opacity={opacity}>
      <Parallax
        bgImage={COVER}
        bgImageStyle={{
          paddingLeft: '60px',
          marginTop: '-50px',
        }}
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
        <StickyWrapper>
          <div className='play-button-wrapper'>
            <PlayButton hasShuffle />
          </div>
        </StickyWrapper>
        <div className='action-section'>
          <ListenerCount>
            {(1221998).toLocaleString()} monthly listeners
          </ListenerCount>
          <div className='action-section__buttons'>
            <FollowButton isFollowing />
            <MoreIcon className='more-icon' />
          </div>
        </div>
        <Section title='Popular'>
          <SongListWrapper>
            {popularSongs.map((song, index) => (
              <SongItemH
                key={index}
                index={index + 1}
                title={song.title}
                subtitle={song.subtitle}
                cover={song.cover}
              />
            ))}
          </SongListWrapper>
        </Section>
        <br />
        <Section title='About'>
          <AboutCard background='https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/271848979_3062286427373984_4204002690391075980_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFgndi4oyn4nk88esJEoeERNh2KLZBxcQg2HYotkHFxCOlR79Rb5SUbjdSetTfaDucaUmRwSNEb-xkGsV1NGOJe&_nc_ohc=diCUONfPVn0AX-UrTdS&_nc_ht=scontent.fbkk2-8.fna&oh=03_AVI2Ty8IVKViirQg5O0L0ZYghJuohHxOUaixLDc1CqMU1g&oe=6211AD09'>
            Happy, Happy Birthday, Pair!<br></br>I wish you all the best and
            hope you success in everything you do. Not s...
          </AboutCard>
        </Section>
      </ContentWrapper>
    </MainLayout>
  )
}

export default PlaylistPage
