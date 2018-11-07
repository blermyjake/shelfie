import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';
import axios from 'axios';

class App extends Component {

constructor(){
  super();
  this.state = {
    product: 
        [{
          name: '', 
         price: '', 
         img: ''}] 
         
        
        //  update: ''
  }
}

getResults(){
  axios.get('/api/inventory').then(results => {
    this.setState({
      products: results.data
    })
  })
  }

handleEditClick(id, name){
  console.log(id)
  axios.put(`/api/inventory/${id}`,{name}).then(results=> {
    this.setState({
      inventory: results.data
    })
  })

} 


// componentDidMount(){


// getAll: (req, res, next) => {
//   const shelfieDB = req.app.get('db');

//   // shelfieDB.read_inventory()
// }
// }



// render(){
// //   // let allInventory = this.state.clothes
// return(


//   <Dashboard key={i}
//   name={e.name}
//   price={e.price}
//   img={e.img}
//   />
// )

// }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         
        </p>
        <h1>

          <Header />
          <hr/>
          <Dashboard product={this.state.product}/>
<hr/>
          <Form update={this.update}/>
<hr/>
          
          </h1>
      </div>
    );
  }
}

export default App;
