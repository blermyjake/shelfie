import React from 'react';


const Product = (props) => {
    // console.log(props.inventory)
    let {id, name, price, img}=props.inventory
    
    return(
        <div>

                <hr/>
           <img src={props.img} alt="Product Img"></img>
           <h4>Product Name: {props.name}</h4>
           <h4>Product Price: {props.price}</h4>
                <button onClick={() => props.deleteProduct(props.id)} >Delete</button>
                <button>Update</button>
                <hr/>


        </div>
    )
}

export default Product