import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`

const Section = (props) => {
  const { children, title } = props
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  )
}

export default Section
