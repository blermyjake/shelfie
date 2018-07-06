import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
   
    render(){
   
    // let allInventory = this.state.clothes.map((e, i) => {
    // });
        return(        
            <div className='Dashboard'>
                <h2>Dashboard</h2>
                <h2>{this.props.state}</h2>
            </div>
        )
    }
}