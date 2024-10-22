import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const StyledDiv = styled.div`
    text-align: center;
    padding: 10px;
    margin-top: 35px;
`
const Heading = styled.h3`
    color: hsl(210, 10%, 33%);
    margin-bottom: 10px;
`
export const Paragraph = styled.p`
  /* width: ${({type}) => type === "primary"? "500px": type === "secondary" ? "300px" : "100%" }; */
font-size: 17px;
   line-height: 25px;
   margin-bottom: 15px;
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


function LastSection() {
  return (
    <StyledDiv>
    <Heading>Clipboard for iOS and Mac OS</Heading>
    <Paragraph className='main-paragraph' >Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
    and you’re ready to start adding to your clipboard.</Paragraph>
    <FlexRow>
        <Button type="primary">Download for iOS</Button>
        <Button type="secondary">Download for Mac</Button>
    </FlexRow>
    </StyledDiv>
  )
}

export default LastSection
