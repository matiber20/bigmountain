import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import CounterContainer from './containers/CounterContainer/CounterContainer';

class App extends React.Component {

  render(){
    return (
      <div className="container">
        <NavBar />
        <h1>Ofertas de la semana</h1>
        <LoginContainer />
        <ItemListContainer />
        <CounterContainer />
      </div>
    );
  }
  
}

export default App;
