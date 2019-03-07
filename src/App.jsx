import React from 'react';
import CreateElementComponent from './components/CreateElement';
import GeneralComponent from './components/Component';
import FunctionalComponent from './components/FunctionalComponent';
import PureComponent from './components/PureComponent';

const App = () => {
  return (
      <>
        {/*<CreateElementComponent/>*/}
        <GeneralComponent/>
        <PureComponent/>
        <FunctionalComponent/>
      </>
  )
};

export default App;