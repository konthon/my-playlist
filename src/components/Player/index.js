import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MiniPlayer from './mini'

import { ReactComponent as ArrowIcon } from 'icons/arrowRight.svg'
import { ReactComponent as MoreIcon } from 'icons/more.svg'

const Wrapper = styled(motion.div)`
  z-index: 3000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ bg }) => bg || 'gray'}
    linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .player-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-bottom: 36px;
    .title {
      font-weight: 700;
      font-size: 14px;
    }
    button {
      background: none;
      border: none;
      color: inherit;
    }
    svg {
      transform: rotate(90deg);
    }
  }
`
const Cover = styled(motion.img)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.4);
  margin-bottom: 16px;
`
const MainTextWrapper = styled.div`
  width: 100%;
  .title {
    width: 100%;
    overflow: hidden;
    font-weight: 900;
    font-size: 36px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .subtitle {
    width: 100%;
    overflow: hidden;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
const PlaybackWrapper = styled.div`
  width: 100%;
  input[type='range'] {
    width: 100%;
  }
  .playback-times {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 500;
  }
`

const Player = (props) => {
  const { title, subtitle, cover, bg, onClose, onTogglePlay } = props
  return (
    <Wrapper layoutId='player-wrapper' bg={bg}>
      <div className='player-top'>
        <button onClick={onClose}>
          <ArrowIcon />
        </button>
        <div>
          <motion.div className='title' layoutId='player-title'>
            {title}
          </motion.div>
        </div>
        <button>
          <MoreIcon />
        </button>
      </div>
      <Cover src={cover} alt={`${title} cover`} layoutId='player-cover' />
      <MainTextWrapper>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
      </MainTextWrapper>
      <PlaybackWrapper>
        <input type='range' />
        <div className='playback-times'>
          <div className='playback-start'>0:00</div>
          <div className='playback-end'>3:00</div>
        </div>
      </PlaybackWrapper>
    </Wrapper>
  )
}

Player.Mini = MiniPlayer
export default Player
