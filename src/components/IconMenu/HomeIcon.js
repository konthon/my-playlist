import React from 'react'

const HomeIcon = ({ isActive = false }) => {
  if (isActive) {
    return (
      <svg
        role='img'
        height='24'
        width='24'
        className='home-active-icon'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z'></path>
      </svg>
    )
  }
  return (
    <svg
      role='img'
      height='24'
      width='24'
      className='home-icon'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z'></path>
    </svg>
  )
}

export default HomeIcon
