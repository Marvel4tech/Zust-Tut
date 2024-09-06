import React, { useEffect } from 'react'
import useCounter from '../store/useCounterStore'

const Product = () => {
    const fetchProducts = useCounter((state) => state.fetchListOfProducts)

    useEffect(() => {

    }, [])

  return (
    <div>
        <h1>List of Products</h1>

    </div>
  )
}

export default Product