import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { SpotifyContext } from 'contexts/spotifyContext'

import PlaylistPage from 'pages/playlist'
import ArtistPage from 'pages/artist'
import TrackPage from 'pages/track'
import AboutPage from 'pages/about'
import RedirectTokenPage from 'pages/redirectToken'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scroll({ top: 0, left: 0 })
  }, [pathname])

  const [accessToken, setAccessToken] = useState(null)

  return (
    <SpotifyContext.Provider value={{ accessToken, setAccessToken }}>
      <Routes>
        <Route path='/' element={<PlaylistPage />} />
        <Route path='/artist' element={<ArtistPage />} />
        <Route path='/track' element={<TrackPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/redirect' element={<RedirectTokenPage />} />
      </Routes>
    </SpotifyContext.Provider>
  )
}

export default App
