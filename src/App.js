import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CategoriasContainer from './containers/CategoriasContainer/CategoriasContainer'
import { Appcontext } from './context/cartContext';

class App extends React.Component {

  render(){
    return (
      <Appcontext.Provider value={[]}>
      <Router>
      <div className="container">
        <NavBar />
        <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/books/:itemId">
        <ItemDetailContainer />
        </Route>
        <Route path="/login">
        <LoginContainer />
        </Route>
        <Route exact path="/categorias">
          <CategoriasContainer />
        </Route>
        </Switch> 
      </div>
      </Router>
      </Appcontext.Provider>
    );
  }
  
}

export default App;
