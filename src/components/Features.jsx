import React from 'react'
import styled from 'styled-components'
import blacklist from "../assets/images/icon-blacklist.svg"
import text from "../assets/images/icon-text.svg"
import preview from "../assets/images/icon-preview.svg"

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const SingleDiv = styled.div`
     width: 300px;

     @media (max-width: 640px) {
    width: 100%;
  }
`
const Header = styled.h3`
   font-size: 18px;
   color: hsl(210, 10%, 33%);
`
const Paragraph = styled.p`
   font-size: 11px;
   color: hsl(201, 11%, 66%);
   margin-top: 10px;
   margin-bottom: 10px;
   line-height: 20px;

   @media (max-width: 640px) {
   font-size: 13px;
  }
`
const Image = styled.img`
   width: 40px;
   margin-bottom: 10px;
`

function Features() {
  return (
    <StyledDiv>
        <SingleDiv>
      <Image src={blacklist} alt='' />
      <Header>Create blacklists</Header>
      <Paragraph>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</Paragraph>
        </SingleDiv>
        <SingleDiv>
      <Image src={text} alt='' />
      <Header>Create blacklists</Header>
      <Paragraph>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</Paragraph>
        </SingleDiv>
        <SingleDiv>
      <Image src={preview} alt='' />
      <Header>Create blacklists</Header>
      <Paragraph>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</Paragraph>
        </SingleDiv>
      
    </StyledDiv>
  )
}

export default Features
