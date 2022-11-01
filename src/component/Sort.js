import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';


function Sort() {
    const [sortPrice, setSortPrice] = useState([]);
    const APILink = "https://dummyjson.com/products";
    const fetchAPIData = async () => {
        const response = await axios.get(APILink);
        setSortPrice(response.data.products);
    }

    useEffect(() => {
        fetchAPIData();
    }, []);

    const sortLowToHigh = () => {
        [...sortPrice].sort((a, b) => a.price - b.price).map((item) => {
            console.log("Low to High", item.price);
        })
    }
    const sortHighToLow = () => {
        [...sortPrice].sort((a, b) => b.price - a.price).map((item) => {
            console.log("High to Low", item.price);
            <div className='col-md-3 mb-4'>
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
            </div>
        })
    }

    return (

        <div className='sortbyprice'> sort by price
            <button onClick={sortLowToHigh}>Low to High</button>
            <button onClick={sortHighToLow}>High To Low</button>
        </div>
    );
}

export default Sort
