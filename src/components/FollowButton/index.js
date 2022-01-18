import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  border: 1px solid var(--essential-subdued);
  border-radius: 4px;
  padding: 6px 8px;
  background-color: transparent;
  color: inherit;
  font-weight: 700;
`

const FollowButton = ({ isFollowing = false }) => {
  return (
    <Wrapper className={isFollowing ? 'is-following' : ''}>
      {isFollowing ? 'Following' : 'Follow'}
    </Wrapper>
  )
}

export default FollowButton
