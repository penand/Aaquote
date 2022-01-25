import React from 'react';
import QuoteForm from './components/QuoteForm';
import QuoteGenerator from './components/QuoteGenerator';
import { StyledContainer } from './style';


function App() {
  return (
    <StyledContainer>
      <p>Hello</p>
      <QuoteGenerator/>
      <QuoteForm/>
    </StyledContainer>
  );
}

export default App;
