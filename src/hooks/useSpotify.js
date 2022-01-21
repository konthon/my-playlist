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
  spotifyApi.setAccessToken(
    'BQC6-y8qLm0W7XxYB9RGzCuXII8rVk7pChQLJfVSgVZ6OgGLSqpkCxm-vXr4CAGqZy-1joPvjU8Nzn_YC3AFtGZzXlU1-i0ReHV7d2WIw7YOHDdunICFT-oB-LstDB5W71LHbp0SV3SgkvEw7E4Ta76ifw9tZGkbeZ4HkDBACsEr46b98fSB'
  )

  return { spotifyApi }
}

export default useSpotify
