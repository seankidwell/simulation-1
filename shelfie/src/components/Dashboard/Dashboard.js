import React, {Component} from 'react';
import Product from '../Product/Product.js';
import axios from 'axios';

export default class Dashbboard extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  removeProduct(id) {
    axios.delete(`/api/product/${id}`).then(res => {
      this.props.getInventory();
    })
  }
  render() {
    let displayInventory = this.props.inventory.map((e,i) => {
      return (
        <div key={i}>
          <Product removeProduct={() => this.removeProduct(i)} name={this.props.inventory[i].name} price={this.props.inventory[i].price} img={this.props.inventory[i].imgurl}/>
        </div>
      )
    })
    return (
      <div>
        Dashbboard
        {displayInventory}
      </div>
    )
  }
}