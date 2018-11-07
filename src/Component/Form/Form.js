import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            input1: '',
            input2: '',
            input3: ''
            // newProduct: null
            
        }
    }



handleInput1(val){
    this.setState({
        input1: val,
    })
}

handleInput2(val){
    this.setState({
        input2: val,
    })
}

handleInput3(val){
    this.setState({
        input3: val,
    })
}

handleCancel(){
    this.setState({input1: '', input2: '', input3: ''
    })
}

    render(){
        return(
            <div className='Form'>
                
                <input placeholder="Image URL" onChange={(event) => this.handleInput1 (event.target.value)}/>
                <input placeholder="Product Name" onChange={(event) => this.handeInput2 (event.target.value)}/>
                <input placeholder="Price" onChange={(event) => this.handleInput3 (event.target.value)}/>

                <button onClick={ this.handleCancel}>Cancel</button>


                <button>Add to Inventory</button>
            </div>
        )
    }
}