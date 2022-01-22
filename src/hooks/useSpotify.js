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
  'streaming',
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
  spotifyApi.setAccessToken(
    'BQBLEWC_R8QTzZMFUmUGIu6UapNJZuA6nBrYcxzxOXq1zPyk-yIUckP7UZuInIwmPzUvAh2hE_V_ozpGm0dMYVejA8Yoczb5t3oGKQFoLsd4LLyRf3wuXlSjk-xZoXvrO1d2_5q93cWCEh5rIVFyZtg-dglynNvGTYX5z5J3tTsxETx4obnN6Rw'
  )

  return { spotifyApi }
}

export default useSpotify
