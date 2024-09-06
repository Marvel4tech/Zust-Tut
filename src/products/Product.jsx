import React, { useEffect } from 'react'
import useCounter from '../store/useCounterStore'

const Product = () => {
    const fetchProducts = useCounter((state) => state.fetchListOfProducts)
    const productLists = useCounter((state) => state.listOfProducts)

    useEffect(() => {
        fetchProducts()
    }, [])

  return (
    <div className=' text-center font-medium mt-10'>
        <h1 className=' font-semibold'>List of Products</h1>
        {
            productLists?.length > 0 ? (
                productLists.map((product, i) => {
                    <div key={i}>
                        <p>{product?.title}</p>
                        <img src={product?.thumbnail} alt="" />
                    </div>
                })
            )
        }
    </div>
  )
}

export default Product