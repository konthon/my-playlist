import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useSpotifyContext } from 'contexts/spotifyContext'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const RedirectTokenPage = () => {
  const { hash } = useLocation()
  const navigate = useNavigate()
  const values = hash
    .substring(1)
    .split('&')
    .reduce((all, curVal) => {
      const [key, val] = curVal.split('=')
      return { ...all, [key]: val }
    }, {})

  const { setAccessToken } = useSpotifyContext({ redirect: false })
  const handleSetToken = () => {
    setAccessToken(values)
    navigate('/')
  }
  useEffect(() => {
    handleSetToken()
  }, [])

  return <Wrapper>redirecting...</Wrapper>
}

export default RedirectTokenPage
