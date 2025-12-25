import React from 'react'

export default function CocktailSlide({cocktail}) {
  return (
    <div className="swiper-item">
        <div className="slide-image ">
            <img className='m-auto' src={cocktail.image} alt="Classic Mojito" />
        </div>
        <div className='slide-content text-white flex flex-wrap gap-5 justify-between md:items-center '>
            <div className="left-content max-w-sm">
                <p className='text-xl mb-3'>Recipe for:</p>
                <strong className='text-[#e7d393] md:text-6xl text-3xl  font-modern-negra '>{cocktail.name}</strong>
            </div>
            <div className="right-content sm:max-w-sm">
                <p className='md:text-5xl text-3xl font-modern-negra'>{cocktail.heading}</p>
                <p className='text-sm'>{cocktail.description}</p>
            </div>
        </div>
    </div>
  )
}
