import React from 'react';
import GeneralComponent from './components/Component';
import FunctionalComponent from './components/FunctionalComponent';
import PureComponent from './components/PureComponent';

const App = () => {
  return (
      <>
        <GeneralComponent/>
        <PureComponent/>
        <FunctionalComponent/>
      </>
  )
};

export default App;