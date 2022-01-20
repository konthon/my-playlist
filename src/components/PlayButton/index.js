import React from 'react'
import styled from 'styled-components'

import { ReactComponent as PlayIcon } from 'icons/play.svg'
import { ReactComponent as ShuffleIcon } from 'icons/shuffle.svg'

const Wrapper = styled.div`
  --play-button: 54px;
  width: var(--play-button);
  position: relative;
`
const MainButton = styled.button`
  background-color: var(--essential-bright-accent);
  width: var(--play-button);
  height: var(--play-button);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
`
const ShuffleButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  color: var(--text-bright-accent);
  background-color: var(--background-elevated-base);
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;
  & > * {
    position: relative;
    top: 1px;
    width: 12px;
  }
`

const PlayButton = (props) => {
  const { hasShuffle = false, ...restProps } = props
  return (
    <Wrapper>
      <MainButton {...restProps}>
        <PlayIcon />
      </MainButton>
      {hasShuffle && (
        <ShuffleButton>
          <ShuffleIcon />
        </ShuffleButton>
      )}
    </Wrapper>
  )
}

export default PlayButton
