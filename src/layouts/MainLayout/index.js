import React from 'react'
import styled from 'styled-components'

import TabBar from 'components/TabBar'

const Wrapper = styled.div`
  background-color: var(--background-elevated-highlight);
  min-height: 100vh;
`
const Container = styled.main`
  position: relative;
  /* max-width: 375px; */
  min-height: 100vh;
  background-color: var(--background-base);
  margin: 0 auto;
  padding-bottom: 100px;
`

const MainLayout = (props) => {
  const { children } = props
  return (
    <Wrapper>
      <Container>
        {children}
        <TabBar />
      </Container>
    </Wrapper>
  )
}

export default MainLayout
