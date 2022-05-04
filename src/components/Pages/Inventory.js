import React from 'react';
import Stock from '../Stock';
import Stocks from '../Stocks';

const Inventory = () => {
    return (
        <Stocks>
            <Stock/>
            <Stock/>
            <Stock/>
        </Stocks>
    );
};

export default Inventory;