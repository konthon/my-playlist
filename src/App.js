import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PlaylistPage from 'pages/playlist'
import ArtistPage from 'pages/artist'
import TrackPage from 'pages/track'
import AboutPage from 'pages/about'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PlaylistPage />} />
      <Route path='/artist' element={<ArtistPage />} />
      <Route path='/track' element={<TrackPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App
