import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component {
  render(){
    return (
      <div>
        <NavBar />
        <h1>Ofertas de la semana</h1>
      </div>
    );
  }
  
}

export default App;
