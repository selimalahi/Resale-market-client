import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const booking =useLoaderData();
    const {productName} =booking;
    console.log(booking);
    return (
        <div>
            <h2>Payment for {productName}</h2>
        </div>
    );
};

export default Payment;