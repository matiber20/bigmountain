import React from 'react';
import AppRouter from './containers/AppRouter/AppRouter'
import AppContextProvider from './context/AppContext';

class App extends React.Component {

  render(){
    return (
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    );
  }
  
}

export default App;
