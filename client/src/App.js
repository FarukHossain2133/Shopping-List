import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Container} from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ShoppintList from './components/ShoppingList';
import {Provider} from 'react-redux';
import store from './store/store';
import Modal from './components/ItemModel';


function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
            <Modal />
            <ShoppintList/>
          </Container>
        
        </div>
      </Provider>
  );
}

export default App;
