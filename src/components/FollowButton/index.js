import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  border: 1px solid var(--essential-subdued);
  border-radius: 4px;
  padding: 6px 8px;
  background-color: transparent;
  color: inherit;
  font-weight: 700;
  transition: all 250ms;
  &:active {
    background-color: var(--background-tinted-base);
  }
`

const FollowButton = ({ isFollowing = false, onClick }) => {
  const [follow, setFollow] = useState(isFollowing)
  const onClickButton = (event) => {
    onClick?.(event)
    setFollow((curr) => !curr)
  }
  return (
    <Wrapper className={follow ? 'is-following' : ''} onClick={onClickButton}>
      {follow ? 'Following' : 'Follow'}
    </Wrapper>
  )
}

export default FollowButton
