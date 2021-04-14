import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

class App extends React.Component {

  render(){
    return (
      <div className="container">
        <NavBar />
        <h1>Ofertas de la semana</h1>
        <LoginContainer />
        <ItemListContainer />
      </div>
    );
  }
  
}

export default App;
