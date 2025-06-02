import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100 text-gray-800 flex-col text-center'>
            <h1 className='text-4xl font-bold mb-4'>Oops!</h1>
            <p className='text-lg'>404 Error Page Not Found</p>
        </div>
    );
};

export default ErrorPage;