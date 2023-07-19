import React from 'react';

import Navigation from '@navigation';
import {GameContextProvider} from '@context/gameContext';

const App = () => {
  return (
    <GameContextProvider>
      <Navigation />
    </GameContextProvider>
  );
};

export default App;
