import React from 'react'
import styled from 'styled-components'
import { Paragraph, SecondHeading } from './FirstSection'
import image from "../assets/images/image-devices.png"
const MainDiv = styled.div`
    text-align: center;
    padding: 10px;
    margin-top: 15px;
`
const MainImage = styled.img`
     width: 450px;
     margin-top: 30px;

  @media (max-width: 640px) {
    width: 80%;
    margin: 20px auto;
  }
`

function Access() {
  return (
    <MainDiv>
   <SecondHeading>Access Clipboard anywhere</SecondHeading>
   <Paragraph className='main-paragraph'>Whether you’re on the go, or at your computer, you can access all your Clipboard 
   snippets in a few simple clicks.</Paragraph>
   <MainImage src={image} alt='' /><br />
   <SecondHeading>Supercharge your workflow</SecondHeading>
   <Paragraph className='main-paragraph'>We’ve got the tools to boost your productivity.</Paragraph>
    </MainDiv>
  )
}

export default Access
