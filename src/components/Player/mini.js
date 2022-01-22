import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ReactComponent as PlayIcon } from 'icons/play.svg'

const Wrapper = styled(motion.div)`
  z-index: 2000;
  position: fixed;
  bottom: 54px;
  left: 0;
  right: 0;
  margin: 0 16px;
  border-radius: 4px;
  background-color: ${({ bg }) => bg || 'gray'};
  display: flex;
  justify-content: space-between;
  .player-left {
    display: flex;
    align-items: center;
  }
  .player-right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    color: var(--text-base);
    border: none;
    background: none;
  }
`
const Cover = styled(motion.img)`
  width: 36px;
  height: 36px;
  object-fit: cover;
  padding: 6px;
  border-radius: 8px;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 14px;
  }
  .subtitle {
    font-size: 10px;
    opacity: 0.6;
  }
`

const MiniPlayer = (props) => {
  const { title, subtitle, cover, bg, onOpen, onTogglePlay } = props
  return (
    <Wrapper layoutId='player-wrapper' bg={bg} onClick={onOpen}>
      <div className='player-left'>
        <Cover src={cover} alt='cover' layoutId='player-cover' />
        <TextWrapper>
          <motion.div className='title' layoutId='player-title'>
            {title}
          </motion.div>
          <div className='subtitle'>{subtitle}</div>
        </TextWrapper>
      </div>
      <button
        className='player-right'
        onClick={(event) => {
          event.stopPropagation()
          console.log('play/pause')
          onTogglePlay?.()
        }}
      >
        <PlayIcon />
      </button>
    </Wrapper>
  )
}

export default MiniPlayer
