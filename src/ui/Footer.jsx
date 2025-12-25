import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black radial-bg lg:pt-30 pt-10 pb-10 relative overflow-hidden'>
        <div className='left-leaf absolute left-0 bottom-0 translate-y-30 lg:w-fit w-[200px] -z-0'>
            <img src="/left-leaf.png" alt="Left Leaf" />
        </div>
        <div className='right-leaf absolute right-0 top-0 rotate-180 -translate-y-30 lg:w-fit w-[200px] -z-0'>
            <img src="/left-leaf.png" alt="Left Leaf" />
        </div>
        <div className="container z-1 relative">
            <div className="flex flex-col justify-center items-center text-center">
            <h1 className='text-white font-modern-negra lg:text-8xl text-5xl'>Where To Find Us</h1>
            <div className='space-y-5'>
                <ul className='text-white'>
                    <p className='uppercase lg:text-xl text-sm mb-3'>visit our bar</p>
                    <li className='lg:text-3xl text-xl'>456, Raq Blvd. #404, Los Angeles, CA 90210</li>
                </ul>
                <ul className='text-white'>
                    <p className='uppercase lg:text-xl text-sm mb-3'>Contact Us</p>
                    <li className='lg:text-3xl text-xl'>(555) 987-6543</li>
                    <li className='lg:text-3xl text-xl'>hello@jsmcocktail.com</li>
                </ul>
                <ul className='text-white'>
                    <p className='uppercase lg:text-xl text-sm mb-3'>Open Every Day</p>
                    <li className='lg:text-3xl text-xl'>Mon–Thu : 11:00am – 12am</li>
                    <li className='lg:text-3xl text-xl'>Fri : 11:00am – 2am</li>
                    <li className='lg:text-3xl text-xl'>Sat : 9:00am – 2am</li>
                    <li className='lg:text-3xl text-xl'>Sun : 9:00am – 1am</li>
                </ul>
            </div>
            </div>

        </div>
    </footer>
  )
}
