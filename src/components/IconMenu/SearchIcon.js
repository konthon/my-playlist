import React from 'react'

const SearchIcon = ({ isActive = false }) => {
  if (isActive) {
    return (
      <svg
        role='img'
        height='24'
        width='24'
        className='search-active-icon'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z'></path>
      </svg>
    )
  }
  return (
    <svg
      role='img'
      height='24'
      width='24'
      className='search-icon'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z'></path>
    </svg>
  )
}

export default SearchIcon
