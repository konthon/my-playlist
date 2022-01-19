import React from 'react'
import styled from 'styled-components'

import { ReactComponent as MoreIcon } from 'icons/more.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .song-index {
    font-size: 12px;
  }
  img.song-cover {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  .song-content {
    flex-grow: 1;
    .song-title {
      margin-bottom: 4px;
    }
    .song-subtitle {
      font-size: 12px;
      color: var(--text-subdued);
    }
  }
  .more-icon {
    color: var(--text-subdued);
    transform: rotate(90deg);
  }
`

const SongItemH = (props) => {
  const { index, title, subtitle, cover } = props
  return (
    <Wrapper>
      {index && <div className='song-index'>{index}</div>}
      <img src={cover} alt={`${title} cover`} className='song-cover' />
      <div className='song-content'>
        <div className='song-title'>{title}</div>
        <div className='song-subtitle'>{subtitle}</div>
      </div>
      <MoreIcon className='more-icon' />
    </Wrapper>
  )
}

export default SongItemH
