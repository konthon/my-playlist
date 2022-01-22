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
          src='https://cdn.fbsbx.com/v/t59.2708-21/272287975_3121868524723282_3314698787912923290_n.gif?_nc_cat=106&ccb=1-5&_nc_sid=041f46&_nc_eui2=AeGfgkCEhoFqMh2n6nUAIUStz_SvhK_p4bHP9K-Er-nhsc6NSDoiKyxSTCfIDJJmv1fefbUp-4XKLQdH79ZM_93f&_nc_ohc=ZZxXCy_bsM4AX9TS6nR&_nc_ht=cdn.fbsbx.com&oh=03_AVLBfVUetnaUbsy20i5MqW_mJVW4QqfGPT_cr76qXhfAwA&oe=61EDEC55'
          alt='cover'
        />
        <Paragraph>
          Happy, Happy Birthday, Pair! <br></br> I wish you all the best and
          hope you success in everything you do. Not sure if I could wish you to
          be more rich since you already are, maybe even way too much lol.
          Anyway, have a good health and be a good mom for Pan, Peaky and Mike,
          my wish goes for them too. Be safe, have fun and have a happy 24th!
          <br></br>
          <br></br>
          Nino
        </Paragraph>
      </ContentWrapper>
    </MainLayout>
  )
}

export default AboutPage
