import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PlaylistPage from 'pages/playlist'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PlaylistPage />} />
    </Routes>
  )
}

export default App
