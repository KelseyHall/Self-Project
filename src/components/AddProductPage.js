import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function AddProductsForm() {
  const [service, setService] = React.useState('')
  const [product, setProduct] = React.useState('')
  const [price, setPrice] = React.useState('')

  const onAmountChange = e => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setPrice(amount)
    }
  }

  return (
    <form onSubmit={() => {}}>
      <input
        value={service}
        type="text"
        placeholder="Service"
        autoFocus
        onChange={e => setService(e.target.value)}
      />

      <p>Product:</p>
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={e => setProduct(e.target.value)}
      />
      <p>Price:</p>
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={onAmountChange}
      />
      <button>Add Product</button>
    </form>
  )
}
