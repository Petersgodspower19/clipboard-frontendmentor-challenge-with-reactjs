import React from 'react'
import styled from 'styled-components'
import Button from './Button'
export const StyledDiv = styled.div`
    text-align: center;
    padding: 10px;
    margin-top: 15px;
`
const SecondDiv = styled.div`
    text-align: center;
    padding: 10px;
    margin-top: 40px;
`
const Heading = styled.h2`
    color: hsl(210, 10%, 33%);
    margin-bottom: 10px;
`
export const SecondHeading = styled.h3`
    color: hsl(210, 10%, 33%);
    margin-bottom: 10px;
`
export const Paragraph = styled.p`
  /* width: ${({type}) => type === "primary"? "500px": type === "secondary" ? "300px" : "100%" }; */
font-size: 17px;
   line-height: 25px;
   margin-bottom: 8px;
   letter-spacing: normal;
   color:  hsl(201, 11%, 66%);

`
export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin: auto;
`

function FirstSection() {
  return (
    <StyledDiv>
        <Heading>A history of everything you copy</Heading>
        <Paragraph className='main-paragraph' >Clipboard allows you to track and organize everything you copy. 
        Instantly access your clipboard on all your devices</Paragraph>
        <FlexRow>
            <Button type="primary">Download for iOS</Button>
            <Button type="secondary">Download for Mac</Button>
        </FlexRow>
        <SecondDiv>
            <SecondHeading>Keep track of your snippets</SecondHeading>
            <Paragraph className='main-paragraph'> Clipboard instantly stores any item you copy in the cloud, 
  meaning you can access your snippets immediately on all your 
  devices. Our Mac and iOS apps will help you organize everything.</Paragraph>
        </SecondDiv>
    </StyledDiv>
  )
}

export default FirstSection
