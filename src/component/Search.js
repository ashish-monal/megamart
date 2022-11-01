import React, { useState } from 'react'
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import Products from './Products';

function Search() {
    const [productsData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState("")


    return (
        <>
            <h3 className='text-center'>Search Filter</h3>
            <input type="text" placeholder='Search...' onChange={(e) => setSearchTitle(e.target.value)} />

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
        </>
    )
}

export default Search
