import React from 'react'
import { v4 as uuidv4} from 'uuid'


export default class AddProductsForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            service: props.services ? props.services.service : '',
            product: props.services ? props.services.product : '',
            amount: props.services ? (props.services.amount / 100).toString(): ''
        }
        
    }

    onServiceChange = (e) =>{
        const service = e.target.value
        this.setState(()=>({ service }))
       
    }
    onProductChange = (e) => {
        const product = e.target.value
        this.setState(()=>({ product }))
    }
    onAmountChange = (e) =>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }))
        }
    }
    onSubmit=(e)=>{
        e.preventDefault()
        console.log('submit')
        if(!this.state.product || !this.state.amount || !this.state.service){
            this.setState(()=>({error:'Please include both service and price'}))

        }else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                service: this.state.service,
                product: this.state.product,
                amount: parseFloat(this.state.amount , 10) * 100
            })
        }
    }

render(){
    return(
            
        <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
            <input
                type="text"
                placeholder="Service"
                autoFocus
                value={this.state.service}
                onChange={this.onServiceChange}

            />
            
            <p>Product:</p>
            <input
                type="text"
                placeholder="Product"
                value={this.state.product}
                onChange={this.onProductChange}
            />
            <p>Price:</p>
            <input 
                type="text"
                placeholder="Price"
                value={this.state.price}
                onChange={this.onAmountChange}
            />
            <button>Add Product</button>
            
        </form>
        
    )
} 
}




   
        


