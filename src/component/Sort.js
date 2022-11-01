import React from 'react'
import '../App.css'



function Sort({ handleSort }) {

    return (

        <div className='sortbyprice'> sort by price
            <button onClick={() => handleSort('low-to-high')}>Low to High</button>
            <button onClick={() => handleSort('high-to-low')}>High To Low</button>
        </div>
    );
}

export default Sort
