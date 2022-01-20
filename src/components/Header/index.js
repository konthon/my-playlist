import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 16px;
  background: gray;
  text-align: center;
  font-weight: 700;
`

const Header = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

export default Header
