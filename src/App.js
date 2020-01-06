import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes/router';

// 3.pages
import Wrapper from './2.templates/Wrapper';
import PageError from './3.pages/Error/PageError';


function App() {
  const routeResult = useRoutes(routes);
  return (
    <Wrapper>{routeResult || <PageError />}</Wrapper>
  );
}

export default App;
