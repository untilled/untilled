import {
  Wrapper,
  Title,
  List,
  Project,
  BtnBox,
  MoreButton,
} from './Projects.style'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'
import React from 'react'

const Projects: React.FC = () => {
  return (
    <Wrapper>
      <Title className="container">
        <h1>우리가 만들어온 것들</h1>
        <h3>발전적인 사람으로부터 발전적인 서비스가 나온다고 믿고 있어요.</h3>
      </Title>
      <List>아직 프로젝트가 없어요!</List>
      <BtnBox>
        <MoreButton href="/projects">더 보기</MoreButton>
      </BtnBox>
    </Wrapper>
  )
}

export default Projects
