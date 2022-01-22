import React, { useContext, useEffect, useMemo } from 'react'
import SpotifyWebAPI from 'spotify-web-api-js'

const AUTH_END_POINT = 'https://accounts.spotify.com/authorize'
const REDIRECT_URI = `${window.location.origin}/redirect`
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  // 'user-read-currently-playing',
  // 'user-read-recently-played',
  // 'user-read-playback-state',
  // 'user-top-read',
  // 'user-modify-playback-state',
]

export const SpotifyContext = React.createContext({
  accessToken: null,
  setAccessToken: () => {},
})

export const useSpotifyContext = (options) => {
  const { redirect = false } = options || {}
  const context = useContext(SpotifyContext)
  const { accessToken, setAccessToken: setTokenState } = context

  const ls_access_token = useMemo(
    () => localStorage.getItem('access_token'),
    []
  )

  const loginUrl = `${AUTH_END_POINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
    '%20'
  )}&response_type=token&show_dialog=true`

  const spotifyApi = useMemo(
    () =>
      new SpotifyWebAPI({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URI,
      }),
    []
  )

  useEffect(() => {
    spotifyApi.setAccessToken(accessToken || ls_access_token)
  }, [accessToken, ls_access_token, spotifyApi])

  const setAccessToken = (values) => {
    const { access_token, token_type, expires_in } = values || {}
    setTokenState(access_token)
    spotifyApi.setAccessToken(access_token)
    localStorage.setItem('access_token', access_token)
    localStorage.setItem('token_type', token_type)
    localStorage.setItem('expires_in', +new Date() + +expires_in * 1000)
  }

  useEffect(() => {
    const expires_in = +localStorage.getItem('expires_in')
    if (accessToken && expires_in) {
      if (+new Date() >= expires_in) {
        localStorage.clear()
        window.location.href = loginUrl
      }
    } else if (!accessToken) {
      if (ls_access_token) {
        setTokenState(ls_access_token)
      } else if (redirect) {
        window.location.href = loginUrl
      }
    }
  }, [accessToken, setTokenState, loginUrl, ls_access_token, redirect])

  return { ...context, loginUrl, spotifyApi, setAccessToken }
}
