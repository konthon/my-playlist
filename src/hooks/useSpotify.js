// import React from 'react'
import SpotifyWebAPI from 'spotify-web-api-js'

const AUTH_END_POINT = 'https://accounts.spotify.com/authorize'
const REDIRECT_URI = `${window.location.origin}/`
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const SCOPES = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

const useSpotify = () => {
  const loginUrl = `${AUTH_END_POINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
    '%20'
  )}&response_type=token&show_dialog=true`
  console.log(loginUrl)

  const spotifyApi = new SpotifyWebAPI({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
  })

  const setAccessToken = (accessToken) =>
    spotifyApi.setAccessToken(
      accessToken ||
        'BQDzQY2CluVzHQRm2l3Cda3EjSvUe95u0ctIxtYWa3SWy9SCzL2KSpoIBnyzYzCS7buGgFP1GgEkE72HV3tViBQaco2E0JE5fjkwk0ipkuwTh-iANar1LJ7Xe-QQXc0-35Fyydrz1LXj0UHN5ZeI89tGQdX3pqQuBN5Gc5xzFEwuqn7vtBeV'
    )

  return { spotifyApi, setAccessToken }
}

export default useSpotify
