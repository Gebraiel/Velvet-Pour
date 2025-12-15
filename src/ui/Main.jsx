import React from 'react'
import LeafBg from './LeafBg'

export default function Main() {
    const popularCocktails = [
        {
            name:"Chapel Hill Shiraz",
            size:"AU | Battle",
            price: "$10"
        },
        {
            name:"Caten Malbee",
            size:"AU | Battle",
            price: "$49"
        },
        {
            name:"Rhino Pale Ale",
            size:"CA | 750 ml",
            price: "$20"
        },
        {
            name:"Irish Guinness",
            size:"IE | 600 ml",
            price: "$29"
        },
    ]
    const lovedCocktails = [
        {
            name:"Tropical Bloom",
            size:"US | Battle",
            price: "$10"
        },
        {
            name:"Passionfruit Mint",
            size:"US | Battle",
            price: "$49"
        },
        {
            name:"Citrus Glow",
            size:"CA | 750 ml",
            price: "$20"
        },
        {
            name:"Lavender Fizz",
            size:"IE | 600 ml",
            price: "$29"
        },
    ]
  return (
    <>
    <section className='min-h-screen relative bg-black'>
        <LeafBg/>
        <div className='size-full absolute left-0 top-0'><div className='sticky top-0 left-0 '><video playsInline autoPlay muted loop  className='size-full object-cover' src="/bg-vd.mp4"></video></div></div>
        <div className='overlay absolute left-0 top-0 size-full'><img className='size-full object-cover' src="/noise.png" alt="Noise Bg" /></div>
        <div className='container z-1 relative h-screen'>
            <div className='py-20 text-white h-full flex flex-col justify-between'>
                <h1 className='text-[clamp(6.25rem,1.8382rem_+_18.8235vw,31.25rem)] uppercase font-modern-negra text-center linear-bg leading-none mt-20'>Mojito</h1>
                <div className='flex sm:flex-row flex-col  justify-between'>
                    <div className='left-content max-w-xs'>
                        <p className=''>Cool. Crisp. Classic</p>
                        <b className='text-6xl font-modern-negra text-[#e7d393]'>Sip the Spirit of Summer</b>
                    </div>
                    <div className='right-content max-w-3xs'>
                        <p className='mb-5 text-justify'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes
                        - designed to delight your senses.</p>
                        <span>View cocktails</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='container z-1 relative h-screen'>
            <div className='flex justify-between gap-5'>
                <div className='left-menu w-1/4'>
                    <b className='text-white'>Most Popular Cocktails:</b>
                    <ul className='flex flex-col gap-5 mt-5'>
                        {
                            popularCocktails.map((cocktail)=>{
                                return(
                                    <li className='flex justify-between gap-5'>
                                        <span className='flex flex-col'>
                                            <b className='text-[#e7d393] text-4xl font-modern-negra'>{cocktail.name}</b>
                                            <small className='text-white'>{cocktail.size}</small>
                                        </span>
                                        <span className='text-white'>- {cocktail.price}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='right-menu w-1/4'>
                    <b className='text-white'>Most Loved Cocktails:</b>
                    <ul className='flex flex-col gap-5 mt-5'>
                        {
                            lovedCocktails.map((cocktail)=>{
                                return(
                                    <li className='flex justify-between gap-5'>
                                        <span className='flex flex-col'>
                                            <b className='text-[#e7d393] text-4xl font-modern-negra'>{cocktail.name}</b>
                                            <small className='text-white'>{cocktail.size}</small>
                                        </span>
                                        <span className='text-white'>- {cocktail.price}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

        </div>




    </section>
    </>
  )
}
