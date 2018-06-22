import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedProduct: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
  }
  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} getInventory={this.compentDidMount}/>
        <Form selectedProduct={this.state.selectedProduct} getInventory={this.componentDidMount}/>
        <Header />
      </div>
    );
  }
}

export default App;
