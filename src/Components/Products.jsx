import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <p className='text-red-500 text-sm text-center py-4'>Loading...</p>
            </>
        )
    }


    const filterProduct =(cat) =>{
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList)

    }
    const ShowProducts = () => {
        return (
            <div>
                <div className='text-sm text-center py-4 bg-slate-100'>
                    <button type="button" className="uppercase focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " onClick={()=>setFilter(data)}>All</button>
                    <button type="button" className="uppercase focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button type="button" className="uppercase focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button type="button" className="uppercase focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button type="button" className="uppercase focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className=''>
                                    <div className='p-2 flex justify-center bg-slate-100'>
                                        <div className='border border-red-700 w-[300px] p-4 rounded-md'>
                                            <img src={product.image} alt={product.title} className="object-contain h-[250px] w-[300px]" />
                                            <div>
                                                <h5 className='text-center font-bold uppercase'>{product.title.substring(0,12)}</h5>
                                                <p className='text-center text-sm text-red-500'>${product.price}</p>
                                                <Link to={`/products/${product.id}`} className='p-1 bg-red-500 text-white flex justify-center text-sm font-bold'>Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className='font-bold text-lg text-center py-2 uppercase '>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products