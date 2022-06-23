import {
  Wrapper,
  PageMenu,
  MenuHeader,
  Menu,
  ArrowList,
  Arrow,
  ShareMessage,
} from './index.style'
import React, { useEffect } from 'react'
import FullPage from './_shared/FullPage'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isMobileState, pageState } from 'states'

import Intro from 'components/home/_menus/Intro'
import About from 'components/home/_menus/About'
import Archivement from 'components/home/_menus/Archievement'
import Projects from 'components/home/_menus/Projects'
import Members from 'components/home/_menus/Members'
import Contact from 'components/home/_menus/Contact'
import Footer from 'components/_shared/Footer'
import Toolbar from 'components/_shared/Toolbar'
import PreloadImg from 'components/_shared/PreloadImg'
import useMouseHover from 'hooks/useMouseHover'
import { members } from 'constants/members'

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
    name: 'Archivement',
    component: Archivement,
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

type Props = {}

const Home = (props: Props) => {
  const [page, setPage] = useRecoilState(pageState)
  const isMobile = useRecoilValue(isMobileState)
  const hoverHandlers = useMouseHover()

  useEffect(() => {
    setPage(0)
    return () => {
      setPage(null)
    }
  }, [setPage])

  useEffect(() => {
    if (isMobile) setPage(null)
    else setPage(0)
  }, [isMobile, setPage])

  const handleNext = () => {
    if (page === null || page === pages.length - 1) return
    setPage(page + 1)
  }
  const handlePrev = () => {
    if (page === null || page === 0) return
    setPage(page - 1)
  }

  const preloadMembersData = members.reduce(
    (prevVal: string[], currVal): string[] => {
      return [...prevVal, ...currVal.images]
    },
    []
  )

  return (
    <Wrapper>
      {/* message toolbar */}
      <Toolbar direction="left">
        <ShareMessage
          href={
            page === 0
              ? 'https://github.com/untilled/untilled'
              : 'https://github.com/untilled/untilled'
          }
          target="_blank"
          visible={page === 0 || page === 4 || page === 5}
          {...hoverHandlers}
        >
          {(page === 0 || page === 1) &&
            'Please visit and star this repository! 😎'}
          {(page === 3 || page === 4 || page === 5 || page === 6) &&
            'We are recruiting members! 🥰'}
        </ShareMessage>
      </Toolbar>
      {/* menu toolbar */}
      <Toolbar direction="right" align="start">
        <PageMenu accented={page === 4}>
          <MenuHeader>{page !== null ? pages[page].name : ''}</MenuHeader>
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
      </Toolbar>
      {/* arrow toolbar */}
      <Toolbar direction="right">
        <ArrowList visible={page !== null && page !== 6}>
          <Arrow activated={page !== 0} onClick={handlePrev} {...hoverHandlers}>
            <MdKeyboardArrowUp />
          </Arrow>
          {/* <Arrow activated={page !== pages.length - 1} onClick={handleNext}> */}
          <Arrow activated={true} onClick={handleNext} {...hoverHandlers}>
            <MdKeyboardArrowDown />
          </Arrow>
        </ArrowList>
      </Toolbar>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
      <PreloadImg data={preloadMembersData} />
    </Wrapper>
  )
}

export default Home
