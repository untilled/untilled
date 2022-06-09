import * as styled from './Header.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { useRecoilValue } from 'recoil'
import { isLayoutClosedState } from 'states'
import { menus } from 'libs/data'

type Props = {}

const Header = ({}: Props) => {
  const isLayoutClosed = useRecoilValue(isLayoutClosedState)
  const router = useRouter()

  return (
    <styled.Wrapper isColsed={isLayoutClosed}>
      <styled.Container className="container">
        <Logo color="white" />
        <styled.Right>
          {menus.map((menu, idx) => (
            <Link key={idx} href={menu.href}>
              <a>
                <styled.Menu selected={menu.href === router.asPath}>{menu.name}</styled.Menu>
              </a>
            </Link>
          ))}
        </styled.Right>
      </styled.Container>
    </styled.Wrapper>
  )
}


export default Header
