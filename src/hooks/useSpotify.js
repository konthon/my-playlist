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
    'BQACtlpjYnZhijH4jC12kuA0K6bGgaJzpr2o4C_1z455MqiC8jlHN_JD_qo2DAYca0zQpreiKEyUQ_ssanWM8f-rBZXQozl454A9uQ4awmq2hPkVPK6GIddgLtRrz3glTZg4yvxWWjToPoIhgcb2KJCc2e7piJdiKRsCb-u1C41r7VaJ77ev'
  )

  return { spotifyApi }
}

export default useSpotify
