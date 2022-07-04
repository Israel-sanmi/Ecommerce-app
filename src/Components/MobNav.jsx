import { XIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const MobNav = ({ handleClick }) => {
    return (
        <div className='md:hidden block'>
            <div className='flex flex-col items-center p-4 bg-slate-200 absolute z-10 w-full'>
                <XIcon
                    onClick={handleClick}
                    className='h-6 w-6 text-red-500 cursor-pointer' />
                <ul className='cursor-pointer flex flex-col items-center uppercase font-bold '>
                    <Link to="/" className='cursor-pointer py-2 text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Home</Link>
                    <Link to="/products" className='cursor-pointer py-2 text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Products</Link>
                    <Link to="/about" className='cursor-pointer py-2 text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>About</Link>
                    <Link to="/contact" className='cursor-pointer py-2 text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Contact</Link>
                    <Link to="/login" className='cursor-pointer py-2 text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Log-In</Link>
                    <Link to="/register" className='cursor-pointer py-2 text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Register</Link>
                    <Link to="/cart" className='cursor-pointer py-2 text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Cart</Link>
                </ul>
            </div>

            {/* <button className='md:flex hidden items-center font-semibold rounded-md border-red-500 border-2 px-4 py-2 '>
                <LoginIcon className='w-6 h-6 text-red-500' />
                Login
            </button> */}
        </div>
    )
}

export default MobNav