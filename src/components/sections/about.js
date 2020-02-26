import React from "react"
import styled from "styled-components"

import { Container, Section, BackgroundTitle, SectionTitle } from "../global"
import {graphql, useStaticQuery} from "gatsby";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(sourceInstanceName: { eq: "svg" }, name: { eq: "about-image" }) {
        publicURL
      }
    }
  `);

  return (
  <Section id="üritusest">
    <Container>
      <BackgroundTitle>ÜRITUSEST</BackgroundTitle>
      <SectionTitle>Üritusest</SectionTitle>

      <AboutContainer>
        <div>
          <AboutImage src={ data.image.publicURL } />
        </div>
        <div>
          <p>Kohvile tulevad üle 30ne kohaliku ja rahvusvahelise firma, kes on saatnud oma arendajad ja värbajad,
            et tudengitega maha istuda ja vastata nende küsimustele.</p>

          <p>Praktikakohvikul saad infomaterjali, kus on välja toodud firmade tutvustused,
            CV koostamise nõuanded ja info kandideerimise kohta. Kirjuta vihikusse küsimused juba ette,
            ning tee vestluse jooksul olulisi märkmeid, et kandideerimisel läheks kõik sujuvalt.</p>
        </div>
      </AboutContainer>
    </Container>
  </Section>
  )
}

export default About

const Info = styled.div`
  ${props => props.theme.font_size.small}

  margin: 20px auto;
  text-align: center;
  color: ${props => props.theme.color.tertiary};

  @media (min-width: ${props => props.theme.screen.md}) {
    padding: 0px 100px;
`

const AboutContainer = styled.section`
  ${props => props.theme.font_size.small}
  
  color: ${props => props.theme.color.tertiary};
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  div {
    width: 47%;
    
    p {
      line-height: 30px;
    }
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    flex-direction: column;
  
    
    div {
      width: 100%;
      text-align: center;
    }
  }
`

const AboutImage = styled.img`
  max-width: 100%;
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none;
  }
`