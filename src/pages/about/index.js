import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import MainLayout from 'layouts/MainLayout'

import { ReactComponent as ArrowIcon } from 'icons/arrowRight.svg'

const Button = styled.button`
  position: fixed;
  z-index: 2000;
  margin: 16px;
  border: none;
  background: none;
  color: var(--text-base);
  svg {
    transform: rotate(180deg);
  }
`
const ContentWrapper = styled.div`
  padding: 16px;
`
const Cover = styled.img`
  margin-top: 60px;
  margin-bottom: 8px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
const ListenerWrapper = styled.div`
  .number {
    font-size: 48px;
    font-weight: 500;
    line-height: 1;
  }
  .desc {
    font-size: 12px;
    text-transform: uppercase;
  }
`
const Paragraph = styled.p`
  color: var(--text-subdued);
  line-height: 1.5;
`

const AboutPage = () => {
  const navigate = useNavigate()
  return (
    <MainLayout title='About'>
      <Button onClick={() => navigate(-1)}>
        <ArrowIcon />
      </Button>
      <ContentWrapper>
        <Cover src='https://source.unsplash.com/random/300x300/' alt='cover' />
        <ListenerWrapper>
          <div className='number'>{(12345678).toLocaleString()}</div>
          <div className='desc'>monthly listeners</div>
        </ListenerWrapper>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet lorem et tellus egestas tristique. Aenean id tempor nisi.
          Cras sed tortor at leo aliquam sollicitudin vel eget augue. Nullam
          suscipit at ante a rhoncus. Aliquam faucibus ipsum eu tincidunt
          maximus. Sed in nisl ut neque laoreet ultricies. Mauris feugiat
          imperdiet nunc, et molestie eros fermentum eget. Morbi et tempus
          velit. Etiam hendrerit pretium elit, sed sollicitudin lectus eleifend
          hendrerit.
          <br />
          Cras fringilla eget odio nec facilisis. Duis finibus tellus nec
          tristique commodo. Sed rutrum orci in magna volutpat dignissim.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla eget gravida justo. Aliquam erat
          volutpat. Duis purus est, condimentum ac consequat non, cursus nec
          ante.
          <br />
          Cras in orci ullamcorper, venenatis nisl et, malesuada lacus. Donec
          vehicula commodo tempus. Donec vel lorem vel lectus dictum mattis.
          Nulla eu quam lacus. Integer in viverra dolor. Vivamus dolor dui,
          ornare vel imperdiet sit amet, commodo vel magna. Donec auctor
          fermentum scelerisque. In semper, nunc vitae imperdiet efficitur,
          sapien mi laoreet dolor, dapibus porttitor ex sapien et nulla. Proin
          nisi ligula, rhoncus eget dignissim lacinia, vulputate ac erat.
          Phasellus bibendum diam arcu, at gravida nibh elementum eget.
        </Paragraph>
      </ContentWrapper>
    </MainLayout>
  )
}

export default AboutPage
