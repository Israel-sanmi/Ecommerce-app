import React, { useState } from 'react'
import { ArrowsExpandIcon, LoginIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'
import MobNav from './MobNav'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(prevOpen => !prevOpen)
    }


    return (
        <div>
            <div className='flex justify-between p-6 bg-slate-100 shadow-xl items-center'>
                <Link to="#" className='text-xl uppercase font-bold text-red-500 flex items-center'>
                    <h1>Ilesanmi Collection</h1>
                    <ArrowsExpandIcon className='w-6 h-6' />
                </Link>

                <ul className='md:flex cursor-pointer hidden'>
                    <Link to="/" className='cursor-pointer text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Home</Link>
                    <Link to="/products" className='cursor-pointer text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Products</Link>
                    <Link to="/about" className='cursor-pointer text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>About</Link>
                    <Link to="/contact" className='cursor-pointer text-gray-400 hover:text-gray-600 active:text-red-500 px-3 text-lg'>Contact</Link>
                </ul>

                <div className='flex gap-4'>
                    <Link to="/login" className='md:flex hidden items-center font-semibold rounded-md border-red-500 border-2 px-4 py-2 '>
                        <LoginIcon className='w-6 h-6 text-red-500' />
                        Login
                    </Link>
                    <Link to="/register" className='md:flex hidden items-center font-semibold rounded-md border-red-500 border-2 px-4 py-2 '>
                        <LoginIcon className='w-6 h-6 text-red-500' />
                        Register
                    </Link>
                    <Link to="/cart" className='md:flex hidden items-center font-semibold rounded-md border-red-500 border-2 px-4 py-2 '>
                        <ShoppingCartIcon className='w-6 h-6 text-red-500' />
                        Cart(0)
                    </Link>
                </div>
                <MenuIcon
                    className='w-8 h-8 block md:hidden text-red-500 cursor-pointer'
                    onClick={handleClick}
                />
            </div>
            {open && <MobNav handleClick={handleClick} />}

        </div>
    )
}

export default Navbar