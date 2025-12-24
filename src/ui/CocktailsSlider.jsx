import React from 'react'
import CocktailSlide from './CocktailSlide'

export default function CocktailsSlider() {
  const cocktails = [
    {
        name:"Classic Mojito",
        image:"/Cocktails/drink1.png"
    },
    {
        name:"Raspberry Mojito",
        image:"/Cocktails/drink2.png"
    },
    {
        name:"Violet Mojito",
        image:"/Cocktails/drink3.png"
    },
    {
        name:"Curacao Mojito",
        image:"/Cocktails/drink4.png"
    }
  ]
  return (
    <div className='swiper-slider'>
        <div className="max-w-6xl  m-auto navigation-buttons flex md:flex-row flex-col justify-between gap-2 *:text-3xl *:font-modern-negra *:text-white/50 *:text-center *:border-b *:border-white/50 *:px-3 *:cursor-pointer *:w-fit *:m-auto mb-30">
            <button>Classic Mojito</button>
            <button>Raspberry Mojito</button>
            <button>Violet Mojito</button>
            <button>Curacao Mojito</button>
        </div>
        <div className="swiper-wrapper relative">
            <CocktailSlide/>
            <div className='absolute top-0 left-0 w-full h-full flex justify-between pt-51'>
                <div className='cursor-pointer'>
                    <p className='text-white font-modern-negra text-3xl max-w-[100px]'>Raspberry Mojito</p>
                    <img src="/prev-arrow.png" alt="Prev Arrow" />
                </div>
                <div className='cursor-pointer'>
                    <p className='text-white font-modern-negra text-3xl max-w-[100px]'>Curacao Mojito</p>
                    <img src="/next-arrow.png" alt="Prev Arrow" />
                </div>
            </div>
        </div>
    </div>
  )
}
