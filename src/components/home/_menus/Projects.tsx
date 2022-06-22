import * as styled from './Projects.styled'
import { projects } from 'libs/data'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'
type Props = {}

const Projects = (props: Props) => {
  const isMobile = useRecoilValue(isMobileState)

  return (
    <styled.Wrapper>
      <styled.Title className="container">
        <h1>우리가 만들어온 것들</h1>
        <h3>발전적인 사람으로부터 발전적인 서비스가 나온다고 믿고 있어요.</h3>
      </styled.Title>
      <styled.List>
        {/* {projects.map((project) => (
          <styled.Project key={project.id}></styled.Project>
        ))} */}
        아직 프로젝트가 없어요!
      </styled.List>
      <styled.BtnBox>
        <styled.MoreButton href="/projects">더 많은 프로젝트</styled.MoreButton>
      </styled.BtnBox>
    </styled.Wrapper>
  )
}

export default Projects
