import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Products() {
    const [productsData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState("");

    const [currentCategory, setCurrentCategory] = useState("")
    const [allProduct, setAllProducts] = useState([]);

    const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/products");
        setAllProducts(response.data.products);
        setProductData(response.data.products);
        setLoading(false);
    }

    const filterResult = (catItem) => {

        const result = allProduct.filter((prod) => {
            return prod.category === currentCategory;

        });
        setProductData(result);

    }

    useEffect(() => {

        loadPosts();

    }, []);

    useEffect(() => {
        filterResult();

    }, [currentCategory])


    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row App '  >
                    <h3 className='text-center'>Search Filter</h3>
                    <input type="text" placeholder='Search...' onChange={(e) => setSearchTitle(e.target.value)} />
                    <hr />
                    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                        <button className='btn btn-outline-dark me-2' onClick={() => setCurrentCategory('smartphones')}>SmartPhones</button>
                        <button className='btn btn-outline-dark me-2' onClick={() => setCurrentCategory('laptops')}>Laptops</button>
                        <button className='btn btn-outline-dark me-2' onClick={() => setCurrentCategory('fragrances')}>Fragrances</button>
                        <button className='btn btn-outline-dark me-2' onClick={() => setCurrentCategory('skincare')}>Skin Care</button>
                        <button className='btn btn-outline-dark me-2' onClick={() => setCurrentCategory('groceries')} >Groceries</button>
                        <button className='btn btn-outline-dark me-2' onClick={() => setCurrentCategory('home-decoration')}>Home Decoration</button>
                    </div>
                    {loading ? (
                        <h4>Loading....</h4>
                    ) : (
                        productsData.filter((value) => {
                            if (searchTitle === "") {
                                return value;
                            } else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                                return value;
                            }

                        }).map((item) => <div className='col-md-3 mb-4'>
                            <div className="card h-100 p-4" key={item.index} >
                                <img src={item.images[0]} className="card-img-top" alt={item.title} height="250px" />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-0">{item.title.substring(0, 12)}</h5>
                                    <p>{item.description.substring(0, 50)}</p>
                                    <p>Rating :- {item.rating}</p>
                                    <p className="card-text lead fw-bold">Rs {item.price}/-.</p>
                                    <p className='lead fw-bold' style={{ color: 'red' }}>Discount:-{item.discountPercentage}%OFF</p>
                                    <a href="#" className="btn btn-outline-dark ">Buy Now</a>
                                </div>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        </div>
    );
}


