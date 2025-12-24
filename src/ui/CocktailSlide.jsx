import React from 'react'

export default function CocktailSlide() {
  return (
    <div className="swiper-item">
        <div className="slide-image ">
            <img className='m-auto' src="/Cocktails/drink1.png" alt="Classic Mojito" />
        </div>
        <div className='slide-content text-white flex flex-wrap gap-5 justify-between md:items-center '>
            <div className="left-content max-w-sm">
                <p className='text-xl mb-3'>Recipe for:</p>
                <strong className='text-[#e7d393] md:text-6xl text-3xl  font-modern-negra '>Classic Mojito</strong>
            </div>
            <div className="right-content sm:max-w-sm">
                <p className='md:text-5xl text-3xl font-modern-negra'>Simple Ingredients Bold Flavor</p>
                <p className='text-sm'>Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.</p>
            </div>
        </div>
    </div>
  )
}
