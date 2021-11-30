import React from 'react';
import styled from 'styled-components';

import Card from './Card'

const Section = styled.div`
  height: 100vh;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 5rem;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 200;
    align-text: center;
    color: white
  }
`;

const CardContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: space-between
`;

function AboutHero() {
  return (
    <>
      <Section>
        <h1>how can apstro help you?</h1>
        <CardContainer>
          <Card title='learn'/>
          <Card title='guidance'/> 
          <Card title='compatibility'/> 
        </CardContainer>
      </Section>
    </>
  )
}

export default AboutHero
