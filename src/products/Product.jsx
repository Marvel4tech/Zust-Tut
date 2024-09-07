import React, { useEffect } from 'react'
import useCounter, { useActions } from '../store/useCounterStore'

const Product = () => {
    const {fetchListOfProducts} = useActions()
    const productLists = useCounter((state) => state.listOfProducts)

    useEffect(() => {
        fetchListOfProducts()
    }, [])

    console.log(productLists)

  return (
    <div className=' flex flex-col text-center font-medium mt-10'>
        <h1 className=' font-bold text-3xl mb-2'>List of Products</h1>
        <ul className=' flex flex-wrap justify-center text-center'>
            {
                productLists?.length > 0 ? (
                    productLists.map((product) => 
                        <div key={product.id}>
                            <p>{product?.title}</p>
                            <img src={product?.thumbnail} alt="" />
                        </div>
                )) : (<p>No Products Listed</p>)
            }
       </ul>
    </div>
  )
}

export default Product