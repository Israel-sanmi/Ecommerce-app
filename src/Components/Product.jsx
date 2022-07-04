import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch
            (`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct()
    }, );


    const Loading = () => {
        return (
            <>
                <p>Loading...</p>
                
            </>
        )
    }

    const ShowProduct = () => {
        return (

            <>
                <div>
                    <img src={product.image} alt={product.title}  height="400px" width="400px"/>
                    <p>finally</p>
                </div>
            </>

        )
    }

    return (
        <div>
            <div>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product