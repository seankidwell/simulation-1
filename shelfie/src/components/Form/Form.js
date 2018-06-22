import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
      productName: '',
      price: '',
      id: null
    }
    this.cancel = this.cancel.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }
  // componentDidUpdate(oldProps) {
  //   if (oldProps !== this.props.selectedProduct) {
  //     this.setState({imgUrl: this.props.selectedProduct.imgUrl, productName: this.props.selectedProduct.name, price: this.props.selectedProduct.price});

  //   }
  // }
  changeImgUrl(val) {
    this.setState({imgUrl: val});
  }
  changeProductName(val) {
    this.setState({productName: val});
  }
  changePrice(val) {
    this.setState({price: val})
  }
  cancel() {
    this.setState({
      imgUrl: '',
      productName: '',
      price: ''
    })
  }
  createProduct(name, price, imgUrl) {
    axios.post('/api/product', {name, price, imgUrl}).then(res => {
      this.props.getInventory();
      this.cancel();
    })
  }
  render() {
    return (
      <div>
        <input onChange={e => this.changeImgUrl(e.target.value)} />
        <input onChange={e => this.changeProductName(e.target.value)} />
        <input onChange={e => this.changePrice(e.target.value)} />
        <button onClick={this.cancel}>Cancel</button>
        <button onClick={() => this.createProduct(this.state.productName, this.state.price, this.state.imgUrl)} >Add to inventory</button>
      </div>
    )
  }
}