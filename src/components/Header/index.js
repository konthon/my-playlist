import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 16px;
  background: #364031;
  text-align: center;
  font-weight: 700;
`

const Header = (props) => {
  const { children, opacity = 1 } = props
  return <Wrapper style={{ opacity }}>{children}</Wrapper>
}

export default Header
