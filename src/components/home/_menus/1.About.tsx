import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { mobile } from 'styles/media'
type Props = {}

// 팀원과 함께 협업하며 프로젝트 진행합니다.
// 다양한 배경의 팀원들과~

// 온라인으로 진행하는 다양한 개발 활동
// 모든 업무가 온라인으로 진행되는 시대에서, 온라인에서의 커뮤니티는 중요해요.

// 지역, 시간에 상관없이 언제, 어디서나, 누구든지
// 지역, 시간에 제약받지 않고 활동이 가능해요.
// 플렛폼에는 국경이 없다고 믿고있습니다.
//row 세 줄

// our mission 팀 언틸드는 발전하는 사람들이 모여 발전하는 서비스를 만들고 발전하는 세상을 만들기 위해 노력하고 있어요.

// 박스 6개
// Global Team
// Global Service
// Developing Delvelopers / Designers / Worlds / Products

const About = (props: Props) => {
  return (
    <Wrapper>
      <Title className="container">
        <h1>모두의 발전을 위해서, 모두의 성장을 위해서</h1>
        <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
        <h3>팀 언틸드는 성장을 원하는 모두를 돕고 있어요.</h3>
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-top: 80px;

  ${mobile} {
    height: fit-content;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
  }

  h3 {
    color: #ced4da;
    font-weight: 500;
  }
`

const CardListWrapper = styled.div`
  flex-grow: 1;
  background-color: #e9ecef;
  height: fit-content;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`

const Card = styled.div`
  background-color: #dee2e6;
  height: 100%;
  border-radius: 15px;
  color: black;
  display: grid;
  margin-bottom: 15px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  & > div {
    padding: 15px;
    border-radius: 15px;
  }
`

const Paint = styled.div`
  background-color: #cecece;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0px;
`

export default About