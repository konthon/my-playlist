import PlayIcon from 'Icons/PlayIcon'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  --play-button: 54px;
  background-color: var(--essential-bright-accent);
  width: var(--play-button);
  height: var(--play-button);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
`

const PlayButton = (props) => {
  return (
    <Wrapper {...props}>
      <PlayIcon />
    </Wrapper>
  )
}

export default PlayButton
