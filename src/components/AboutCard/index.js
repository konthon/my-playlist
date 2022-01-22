import React from 'react'
import styled from 'styled-components'

import { ReactComponent as ArrowRightIcon } from 'icons/arrowRight.svg'
import { Link } from 'react-router-dom'

const Ratio = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  & > * {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`
const Wrapper = styled.div`
  color: var(--text-base);
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  .card-content-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 16px;
    line-height: 1.5;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
    .card-content {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .arrow-icon {
        flex: 1 0 24px;
      }
    }
  }
`

const AboutCard = (props) => {
  const { children, background } = props
  return (
    <Link to='/about'>
      <Ratio>
        <Wrapper background={background}>
          <div className='card-content-wrapper'>
            <div className='card-content'>
              {children}
              <ArrowRightIcon className='arrow-icon' />
            </div>
            {/* {children} */}
          </div>
        </Wrapper>
      </Ratio>
    </Link>
  )
}

export default AboutCard
