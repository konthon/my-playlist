import React from 'react'
import styled from 'styled-components'

import FollowButton from 'components/FollowButton'
import PlayButton from 'components/PlayButton'
import TabBar from 'components/TabBar'
import MoreIcon from 'Icons/MoreIcon'

const COVER = 'https://source.unsplash.com/random/2200x1200/'

const Wrapper = styled.div`
  background-color: var(--background-elevated-highlight);
  min-height: 100vh;
`
const Container = styled.div`
  position: relative;
  max-width: 375px;
  min-height: 100vh;
  background-color: var(--background-base);
  margin: 0 auto;
  padding-bottom: 100px;
`
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

const PlaylistPage = () => {
  return (
    <Wrapper>
      <Container>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
            metus sed augue gravida malesuada. Nam sit amet imperdiet lectus,
            sit amet efficitur sapien. In ut tristique ex, quis tristique sem.
            Curabitur volutpat vulputate velit non sollicitudin. Nulla tristique
            arcu eu arcu condimentum laoreet. Suspendisse id mauris dapibus,
            laoreet tortor sed, consequat arcu. Proin sit amet ante elementum,
            rutrum est vitae, malesuada dolor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Donec
            ultrices arcu sodales, ornare diam et, elementum nisi. Donec et
            lorem leo. Vivamus sit amet velit in nunc lacinia vulputate ut id
            quam. Cras elit elit, tincidunt nec volutpat et, maximus eget nisi.
            <br />
            Cras pretium felis mauris, ut fringilla nibh elementum quis.
            Vestibulum condimentum faucibus nibh non euismod. Aliquam eget
            turpis mattis, venenatis tortor vel, rhoncus tellus. Phasellus
            accumsan diam quis laoreet consectetur. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Etiam at scelerisque risus. Nam dictum commodo metus eget imperdiet.
            Fusce vel volutpat nisi. Donec dapibus tortor justo, vel pretium
            nibh sollicitudin vitae.
            <br />
            Aliquam sodales sollicitudin diam, sit amet mattis dui scelerisque
            sed. Etiam sit amet diam porta, faucibus magna et, interdum orci.
            Phasellus a augue ac risus consectetur interdum. Mauris a lectus id
            nisi mollis pharetra. Praesent consequat interdum lectus a commodo.
            Donec sit amet faucibus nunc. Maecenas faucibus quam nec quam
            faucibus gravida. Phasellus sit amet dolor purus. Praesent finibus
            sapien id tincidunt sollicitudin. Pellentesque a placerat tortor, a
            condimentum dolor. Morbi eu semper lacus, a bibendum velit.
            Suspendisse massa quam, auctor sed pulvinar vel, tristique a metus.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec rutrum sagittis augue, quis interdum
            nunc iaculis nec. Donec varius rutrum convallis. In nec justo
            eleifend, facilisis ligula ac, sollicitudin tortor.
            <br />
            Proin blandit facilisis vulputate. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Vestibulum ipsum est, dignissim maximus orci id, faucibus
            scelerisque sapien. Etiam et mauris hendrerit, pulvinar tellus ac,
            tincidunt tellus. Nulla luctus nibh ut massa mollis interdum.
            Integer iaculis mi sit amet nunc dapibus, eget ultricies tortor
            hendrerit. Ut at metus quam. Cras tincidunt ullamcorper erat id
            blandit. Vestibulum tempor, tellus sit amet tincidunt sodales, neque
            nunc egestas mi, a consequat nisi mi a lectus. Fusce eleifend
            finibus ipsum ac elementum. Ut pharetra dolor quis diam vulputate,
            eget posuere augue dictum.
            <br />
            Phasellus lorem orci, blandit at mi nec, venenatis tristique libero.
            Integer a ipsum eget velit rhoncus mattis sit amet sed leo.
            Phasellus et dolor lacinia, faucibus neque ac, ullamcorper tortor.
            Curabitur eu lacus at tellus lacinia feugiat. Sed tincidunt faucibus
            consectetur. Donec fermentum quam id tortor maximus, laoreet blandit
            massa mollis. Sed ac tortor eu neque vestibulum maximus. Proin
            turpis tortor, eleifend condimentum nisi egestas, malesuada tempus
            est.
          </p>
        </ContentWrapper>
        <TabBar />
      </Container>
    </Wrapper>
  )
}

export default PlaylistPage
