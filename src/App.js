import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import CounterContainer from './containers/CounterContainer/CounterContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {

  render(){
    return (
      <Router>
      <div className="container">
        <NavBar />
        <h1>Ofertas de la semana</h1>
        <Switch>
          <Route exact path="/">
        <LoginContainer />
        </Route>
        <Route path="/items">
        <ItemListContainer />
        </Route>
        <Route path="/counter">
        <CounterContainer />
        </Route>
        
        </Switch>
        
        
      </div>
      </Router>
    );
  }
  
}

export default App;
