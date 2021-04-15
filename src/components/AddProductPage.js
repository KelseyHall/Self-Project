import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function AddProductsForm({ onSubmit: propOnSubmit }) {
  const [fields, setFields] = React.useState({
    service: '',
    product: '',
    price: ''
  })
  const [error, setError] = React.useState('')

  const { service, price, product } = fields

  const onPriceChange = e => {
    const price = e.target.value
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setFields({
        ...fields,
        price
      })
    }
  }

  const onChange = e => {
    const key = e.target.name
    const value = e.target.value

    setFields({
      ...fields,
      [key]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    if (!product || !price || !service) {
      setError('Please include both service and price')
    } else {
      setError('')
      propOnSubmit({
        service: service,
        product: product,
        amount: parseFloat(price, 10) * 100
      })
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {error && <p>{error}</p>}
      <input
        name="service"
        value={service}
        type="text"
        placeholder="Service"
        autoFocus
        onChange={onChange}
      />

      <p>Product:</p>
      <input
        name="product"
        type="text"
        placeholder="Product"
        value={product}
        onChange={onChange}
      />
      <p>Price:</p>
      <input
        name="price"
        type="text"
        placeholder="Price"
        value={price}
        onChange={onPriceChange}
      />
      <button>Add Product</button>
    </form>
  )
}
