import React from 'react'
import logo from "../assets/images/logo.svg"
import {styled} from "styled-components"
const StyledHeader = styled.header`
    text-align: center;
    padding: 10px;
    width: 100%;
`

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt='' />
    </StyledHeader>
  )
}

export default Header
