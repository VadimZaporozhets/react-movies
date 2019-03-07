import React from 'react';
import {
    GeneralComponent,
    FunctionalComponent,
    Pure
} from './components';

export const App = () => {
  return (
      <>
        <GeneralComponent/>
        <Pure/>
        <FunctionalComponent/>
      </>
  )
};