import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
  z-index: 2000;
  position: fixed;
  bottom: 54px;
  left: 0;
  right: 0;
  margin: 0 16px;
  border-radius: 4px;
  background-color: darkred;
  display: flex;
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
    font-weight: 700;
  }
  .subtitle {
    font-size: 12px;
  }
`

const MiniPlayer = (props) => {
  const { title, subtitle, cover } = props
  return (
    <Wrapper>
      <Cover src='https://source.unsplash.com/random/300x300/' alt='cover' />
      <TextWrapper>
        <motion.div className='title'>{title}</motion.div>
        <div className='subtitle'>{subtitle}</div>
      </TextWrapper>
    </Wrapper>
  )
}

export default MiniPlayer
