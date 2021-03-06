import { Wrapper, Content, Title, ContentBottom } from './Contact.style'
import Button from 'components/_shared/Button'
import { useRouter } from 'next/router'
import React from 'react'
import BackgroundVideos from '../_shared/BackgroundVideos'
import Gradient from 'components/_shared/Gradient'

const videos = ['/videos/intro1.mp4', '/videos/intro2.mp4']

const words = ['πββοΈ', 'ππΌββοΈ', 'π¨πΌβπ»', 'π§πΌββοΈ']

const Contact: React.FC = () => {
  return (
    <Wrapper>
      {/* <BackgroundVideos data={videos} /> */}
      <Gradient />
      <Content className="container">
        <Title>
          <h1>νλ‘μ νΈ νΌμ ν  μ μμμμ?</h1>
          <h1>μΈνΈλμ ν¨κ» νλ‘μ νΈλ₯Ό μ§νν΄ λ³΄μΈμ</h1>
        </Title>
        <ContentBottom>
          <Button color="white" href="mailto:morethanmin.dev@gmail.com">
            Contact
          </Button>
          <Button color="gray_2">Share</Button>
        </ContentBottom>
      </Content>
    </Wrapper>
  )
}

export default Contact
