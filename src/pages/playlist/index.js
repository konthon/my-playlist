import React from 'react'
import styled from 'styled-components'

import MainLayout from 'layouts/MainLayout'
import FollowButton from 'components/FollowButton'
import PlayButton from 'components/PlayButton'
import Section from 'components/Section'
import SongItemH from 'components/SongItemH'

import { ReactComponent as MoreIcon } from 'icons/more.svg'
import AboutCard from 'components/AboutCard'

const COVER = 'https://source.unsplash.com/random/2200x1200/'

const ContentWrapper = styled.div`
  padding: 16px;
  .section-top {
    display: flex;
    justify-content: space-between;
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
  }
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 52px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 16px 4px 16px;
`
const BackgroundParallax = styled.div`
  position: relative;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 375px;
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
  const popularSongs = [
    {
      cover: 'https://source.unsplash.com/random/300x300/',
      title: 'Song Name',
      subtitle: 'Album',
    },
    {
      cover: 'https://source.unsplash.com/random/300x300/',
      title: 'Song Name',
      subtitle: 'Album',
    },
    {
      cover: 'https://source.unsplash.com/random/300x300/',
      title: 'Song Name',
      subtitle: 'Album',
    },
    {
      cover: 'https://source.unsplash.com/random/300x300/',
      title: 'Song Name',
      subtitle: 'Album',
    },
    {
      cover: 'https://source.unsplash.com/random/300x300/',
      title: 'Song Name',
      subtitle: 'Album',
    },
  ]

  return (
    <MainLayout>
      <BackgroundParallax background={COVER}>
        <Title>ArtistName</Title>
      </BackgroundParallax>
      <ContentWrapper>
        <div className='section-top'>
          <div className='action-section'>
            <ListenerCount>
              {(123456789).toLocaleString()} monthly listeners
            </ListenerCount>
            <div className='action-section__buttons'>
              <FollowButton isFollowing />
              <MoreIcon className='more-icon' />
            </div>
          </div>
          <PlayButton />
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
        <Section title='About'>
          <AboutCard background='https://source.unsplash.com/random/500x500/'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            molestie sodales rutrum. Pellentesque scelerisque est sit amet
            tortor euismod posuere. Integer ac nibh semper.
          </AboutCard>
        </Section>
      </ContentWrapper>
    </MainLayout>
  )
}

export default PlaylistPage
