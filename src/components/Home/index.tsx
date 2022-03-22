import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import FullPage from '../_shared/FullPage'
import Intro from './0.Intro'
import About from './1.About'
import Projects from './3.Projects'
import Achievement from './2.Achievement'
import Members from './4.Members'
import Contact from './5.Contact'
import Footer from 'components/_shared/Footer'
import { AiFillGithub } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { mobile } from 'styles/media'
import { useRecoilState } from 'recoil'
import { home } from 'states'
import { css } from '@emotion/react'

//q&a페이지도 하나 만들어서 메시지 형태로 만들어보는건 어떨까?
type Props = {}

const pages = [
  {
    name: '',
    component: Intro,
  },
  {
    name: 'About',
    component: About,
  },
  {
    name: 'Achievement',
    component: Achievement,
  },
  {
    name: 'Projects',
    component: Projects,
  },
  {
    name: 'Members',
    component: Members,
  },
  {
    name: 'Contact',
    component: Contact,
  },
  {
    name: '',
    component: Footer,
  },
]

const Home = (props: Props) => {
  const [page, setPage] = useRecoilState(home)
  // const [page, setPage] = useState(0)
  const rightBarRef = useRef<HTMLDivElement>(null)
  const leftBarRef = useRef<HTMLDivElement>(null)
  const handleResize = () => {
    if (
      rightBarRef.current &&
      leftBarRef.current &&
      typeof window === 'object'
    ) {
      let distance = 0
      if (window.innerWidth > 1024) distance = (window.innerWidth - 1024) / 2
      rightBarRef.current.style.right = `${distance + 10}px`
      rightBarRef.current.style.display = `flex`
      leftBarRef.current.style.left = `${distance + 10}px`
      leftBarRef.current.style.display = `flex`
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      setPage(0)
    }
  }, [])

  useEffect(() => {
    handleResize()
  }, [rightBarRef])

  const handleNext = () => {
    if (page === pages.length - 1) return
    else setPage(page + 1)
  }
  const handlePrev = () => {
    if (page === 0) return
    else setPage(page - 1)
  }

  return (
    <Wrapper>
      <ToolBar direction="left" ref={leftBarRef}>
        <div></div>
        <div></div>
        <IconList>
          <a href="https://github.com/untilled">
            <AiFillGithub />
          </a>
          <div>
            <IoMdSettings />
          </div>
        </IconList>
      </ToolBar>
      <ToolBar direction="right" ref={rightBarRef}>
        <div></div>
        <PageMenu page={page}>
          <MenuHeader>{pages[page].name}</MenuHeader>
          {pages.map((menu, idx) => (
            <Menu
              selected={page === idx}
              key={idx}
              onClick={() => setPage(idx)}
            >
              <div>{menu.name}</div>
            </Menu>
          ))}
        </PageMenu>

        <ArrowList>
          {/* <div>
            <MdKeyboardArrowUp />
          </div> */}
          <Arrow activated={page !== 0} onClick={handlePrev}>
            <MdKeyboardArrowUp />
          </Arrow>
          <Arrow activated={page !== pages.length - 1} onClick={handleNext}>
            <MdKeyboardArrowDown />
          </Arrow>
        </ArrowList>
      </ToolBar>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
`
type ToolBar = {
  direction: string
}

const ToolBar = styled.div<ToolBar>`
  z-index: 10;
  top: 0;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ direction }) =>
    direction === 'left' ? 'flex-start' : 'flex-end'};
  position: absolute;
  font-size: 0.8rem;

  ${mobile} {
    display: none !important;
  }
`
type PageMenu = {
  page: number
}

const PageMenu = styled.div<PageMenu>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 15px;
  ${({ page }) =>
    (page === 1 || page === 2) &&
    css`
      background-color: #343a40;
      & > div {
        color: black;
      }
    `};
`

const MenuHeader = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 0;
  width: 10px;
  transform: translate(-20%, -150%) rotate(-90deg); ;
`

type MenuProps = {
  selected: boolean
}

const Menu = styled.div<MenuProps>`
  position: relative;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.selected ? 'white' : '#797979')};
  & > div {
    display: none;
    position: absolute;
    top: -5px;
    right: 100%;
    margin-right: 10px;
    white-space: nowrap;
  }
  &:hover {
    & > div {
      display: block;
    }
  }
`

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  & > * {
    border-radius: 50%;
    background-color: #494949;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
    }
    cursor: pointer;
  }
`

const ArrowList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`
type ArrowProps = {
  activated: boolean
}

const Arrow = styled.div<ArrowProps>`
  border-radius: 50%;
  background-color: #494949;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
  cursor: pointer;
  visibility: ${(props) => (props.activated ? 'visible' : 'hidden')};
`

export default Home
