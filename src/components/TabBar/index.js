import React from 'react'
import styled from 'styled-components'

import HomeIcon from 'components/IconMenu/HomeIcon'
import LibraryIcon from 'components/IconMenu/LibraryIcon'
import SearchIcon from 'components/IconMenu/SearchIcon'

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  /* max-width: 375px; */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 0;
  background-color: var(--background-base);
  &::before {
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(transparent, var(--background-base));
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 50px;
  }
`

const TabButton = styled.button`
  flex-basis: calc(100% / 3);
  border: none;
  color: var(--text-subdued);
  background-color: inherit;
  &.tab-active {
    color: var(--text-base);
    .tab-name {
      font-weight: 700;
    }
  }
  .tab-name {
    text-align: center;
  }
`

const TabBar = () => {
  return (
    <Wrapper>
      <TabButton className='tab-active'>
        <HomeIcon isActive />
        <div className='tab-name'>Home</div>
      </TabButton>
      <TabButton>
        <SearchIcon />
        <div className='tab-name'>Search</div>
      </TabButton>
      <TabButton>
        <LibraryIcon />
        <div className='tab-name'>Your Library</div>
      </TabButton>
    </Wrapper>
  )
}

export default TabBar
