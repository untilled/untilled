import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return <Wrapper className="borderLine">Page</Wrapper>
}

const Wrapper = styled.div`
  height: 100vh;
`

export default Page
