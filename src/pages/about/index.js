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
        <Cover
          src='https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/271790847_1284941788656200_7664182311771782744_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFycoKXGH0vkx5nmI78j7gvWp5OeQYFPbZank55BgU9tncFfTeAtQKdOWWmhN8gJ_LEb_T_9vXPZmFtmlT6Qja1&_nc_ohc=mDeGDuZGcVcAX_4IiaB&tn=jarqpZDyQpoO5FCF&_nc_ht=scontent.fbkk2-8.fna&oh=03_AVIFOv0y0w_MxAv7fMQY3xotQwIJ_bfBR0gDZlnhgw6aPg&oe=620F2D0D'
          alt='cover'
        />
        <Paragraph>
          Happy, happy birthday, Pair! <br></br> I hope this year will be your
          year, with more reasons to smile and more time to rest.<br></br> I
          wish you all the best and hope you success in everything you do.{' '}
          <br></br>Have a happy 24th! Love ya!
          <br></br>
          <br></br>
          Nino
        </Paragraph>
      </ContentWrapper>
    </MainLayout>
  )
}

export default AboutPage
