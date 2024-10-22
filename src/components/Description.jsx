import React from 'react';
import styled from 'styled-components';
import image from "../assets/images/image-computer.png";
import { Paragraph } from './FirstSection';

const MainDiv = styled.div`
  display: flex;
  align-items: self-start;
  /* justify-content: space-between; */
  gap: 10px;
  padding: 10px;
  margin-top: 20px;
  position: relative;

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
  width: 50%;
  padding: 20px;
  z-index: 1; 
  text-align: start;

  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
  }
`;

const ComputerImage = styled.img`
  width: 450px;
  position: relative;
  left :-50px;
  z-index: 0; 

  @media (max-width: 640px) {
    width: 80%;
    position: relative;
    left: auto;
    margin: 20px auto;
  }
`
const StyledHeading = styled.h3`
    color: hsl(210, 10%, 33%);
    margin-bottom: 10px;
    font-size: 20px;
`

function Description() {
  return (
    <MainDiv className="description">
        <ComputerImage className="computer" src={image} alt="Computer" />
      <TextContent>
        <div>
        <StyledHeading>Quick Search</StyledHeading>
        <Paragraph className='description-paragraph'>Easily search your snippets by content, category, web address, application, and more.
        </Paragraph>
        </div>
        <div>
        <StyledHeading>iCloud Sync</StyledHeading>
        <Paragraph className='description-paragraph'>Instantly saves and syncs snippets across all your devices.
        </Paragraph>
        </div>
        <div>
        <StyledHeading>Complete History</StyledHeading>
        <Paragraph className='description-paragraph'>Retrieve any snippets from the first moment you started using the app.
        </Paragraph>
        </div>
      </TextContent>
      
    </MainDiv>
  );
}

export default Description;
