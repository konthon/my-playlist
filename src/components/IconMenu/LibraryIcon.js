import React from 'react'

const LibraryIcon = ({ isActive = false }) => {
  if (isActive) {
    return (
      <svg
        role='img'
        height='24'
        width='24'
        className='collection-active-icon'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z'></path>
      </svg>
    )
  }
  return (
    <svg
      role='img'
      height='24'
      width='24'
      className='collection-icon'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z'></path>
    </svg>
  )
}

export default LibraryIcon
