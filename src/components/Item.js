import React, { useState } from 'react';

const Item = ({ item }) => {
    const {_id, picture, desc, name, price} = item;

    return (
        <div className='flex justify-between items-center rounded mt-2 mb-4'>
        <div className='flex text-left'>
            <img src={picture} className='w-24  border-2 rounded-lg' alt="items img" />
                <div className='pl-4'>
                    <p className='text-lg font-medium'>{name}</p>
                    <p><small>{_id}</small></p>
                    <p><small>{desc}</small></p>
                </div>
            </div>
            <div>
                <p>{name}</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>2</p>
                <p className='mx-24 font-bold'>{price}</p>
                <p className='font-bold'>$178</p>
            </div> 
            <div className='text-center'>
            <button className=' bg-teal-700 rounded text-white border py-0 px-4  mr-8'>Delivered</button>
            <button className=' bg-red-800 rounded text-white border py-0 px-4 '>Remove</button>
             </div>
        </div>
    );
};

export default Item;