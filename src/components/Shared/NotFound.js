import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    const handleNotfoundNavigateBtn = () => {
           navigate('/home')
    }

    return (
        <div className='h-screen '>
         
            <div  className='mt-24 text-center'>
                <h1 className='text-8xl font-bold text-slate-400'>404</h1>
                 <h2 className='text-5xl my-2 text-red-600'>Oops!
                </h2>
                <p>We're sorry, <br />
                    The page you were looking for doesn't exist anymore.</p>
                <button onClick={handleNotfoundNavigateBtn} className='mt-4 border rounded-full px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white'>Back home</button>
            </div>
         
        </div>
    );
};

export default NotFound;