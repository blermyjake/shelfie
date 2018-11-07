import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    
    deleteProduct(id){
        alert("delete");
    }
    
    render(){
        // console.log(this.props)

   

    let allInventory = this.props.product.map((e, i) => {
        return(
            <div key={i}>
                {/* {e} */}
                {/* {console.log(e)}; */}
                <Product 
                    inventory={e}
                    deleteProduct={this.deleteProduct}
                />
            </div>
        )
    });
    // console.log(this.props);
        return(        
            <div className='Dashboard'>
                <h2></h2>
                {allInventory}
                <h2>{this.props.state}</h2>
            </div>
        )
    }
}