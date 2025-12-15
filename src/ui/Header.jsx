import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header className='absolute left-0 top-0 z-1 w-full py-5'>
        <div className='container'>
            <div className='flex md:flex-row flex-col gap-3 justify-between items-center'>
                <div className='flex gap-2 items-center text-white text-2xl font-modern-negra'><span><img src="/icon.png" alt="Logo Icon" /></span>Velvet Pour</div>
                <nav>
                    <ul className='text-white flex gap-5 uppercase'>
                        <li className='sm:text-sm text-xs'>Cocktails</li>
                        <li className='sm:text-sm text-xs'>About Us</li>
                        <li className='sm:text-sm text-xs'>The Art</li>
                        <li className='sm:text-sm text-xs'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
