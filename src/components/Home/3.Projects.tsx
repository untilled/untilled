import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

const projects = [
  {
    id: 1,
    name: 'project',
  },
  {
    id: 2,
    name: 'project',
  },
  {
    id: 3,
    name: 'project',
  },
  {
    id: 4,
    name: 'project',
  },
  {
    id: 5,
    name: 'project',
  },
  {
    id: 6,
    name: 'project',
  },
  {
    id: 7,
    name: 'project',
  },
  {
    id: 8,
    name: 'project',
  },
  {
    id: 9,
    name: 'project',
  },
  {
    id: 10,
    name: 'project',
  },
]

const Projects = (props: Props) => {
  return (
    <Wrapper>
      <Title>
        <h1>지금까지 우리가 만들어온 것들😺</h1>
        <h3>
          개발하는 사람부터 서비스를 이용하는 사람까지 모두가 발전할 수 있는
          서비스를 개발하고 제공하고자 해요.
        </h3>
      </Title>
      <List>
        {projects.map((project) => (
          <Project key={project.id}></Project>
        ))}
      </List>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100vw;
  height: 100vh;
  padding-top: 100px;

  ${mobile} {
    height: fit-content;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
  }
  h3 {
    color: #ced4da;
  }
`

const List = styled.div`
  width: 100%;
  margin: 45px 0;
  padding: 45px 0;
  display: flex;
  align-items: center;
  gap: 45px;
  overflow: hidden;
  background-color: #212529;
`

const Project = styled.div`
  background-color: #212529;
  width: 300px;
  flex-shrink: 0;
  height: 450px;
`

export default Projects
