import React from 'react';

import QuoteForm from './components/QuoteForm';
import QuoteGenerator from './components/QuoteGenerator';
import { StyledContainer } from './style';

function App() {
  return (
    <StyledContainer>
      <QuoteGenerator/>
      <QuoteForm/>
    </StyledContainer>
  );
}

export default App;
