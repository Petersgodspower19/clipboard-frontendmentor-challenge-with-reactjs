import React from 'react'
import styled from 'styled-components'
import logo from "../assets/images/logo.svg"
import facebook from "../assets/images/icon-facebook.svg"
import instagram from "../assets/images/icon-instagram.svg"
import twitter from "../assets/images/icon-twitter.svg"

  

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
   background-color: hsl(201, 11%, 95%);
  margin-top: 40px;

  @media(max-width: 640px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`
const StyledImage = styled.img`
    width: 40px;
`
const Div = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;

    @media(max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
`
const ListDiv =  styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const List = styled.li`
   color: hsl(210, 10%, 33%);
   font-size: 14px;
   cursor: pointer;
   transition: 0.5s;

   &:hover{
     color: hsl(171, 66%, 40%);
   }
`
const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    gap:8px;
`
const Image = styled.img`
   
`
const ImageLinks = styled.a`
    color:hsl(210, 10%, 33%);
   cursor: pointer;
   text-decoration: none;
   &:hover{
    color:hsl(171, 66%, 40%);
   }
`
function Footer() {
  return (
        <StyledFooter>
      <StyledImage src={logo} alt='' />
      <Div>
        <ListDiv>
            <List>FAQs</List>
            <List>Contact Us</List>
        </ListDiv>
      <ListDiv>
        <List>Privacy Policy</List>
        <List>Press Kit</List>
      </ListDiv>
      <ListDiv>
        <List>Install Guide</List>
      </ListDiv>
      </Div>
      <ImageDiv>
      <ImageLinks href="#"><Image src={facebook} alt='' /></ImageLinks>
      <ImageLinks href="#"><Image src={twitter} alt='' /></ImageLinks>
      <ImageLinks href="#"><Image src={instagram} alt='' /></ImageLinks>
      </ImageDiv>
    </StyledFooter>
  )
}

export default Footer
