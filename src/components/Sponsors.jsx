import React from 'react'
import styled from 'styled-components'
import google from "../assets/images/logo-google.png"
import ibm from "../assets/images/logo-ibm.png"
import microsoft from "../assets/images/logo-microsoft.png"
import vectorgraphics from "../assets/images/logo-vector-graphics.png"
import hp from "../assets/images/logo-hp.png"


const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Image = styled.img`
    width: 100px;

    @media (max-width: 640px) {
    margin: 10px auto;
  }
`

function Sponsors() {
  return (
    <StyledDiv>
        <Image src={google} alt="" />
        <Image src={ibm} alt="" />
        <Image src={microsoft} alt="" />
        <Image src={hp} alt="" />
        <Image src={vectorgraphics} alt='' />
    </StyledDiv>
  )
}

export default Sponsors
