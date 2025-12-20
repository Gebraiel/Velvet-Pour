import React from 'react'
import NoisyBg from './NoisyBg'

export default function AboutSection() {
  return (
    <section className='bg-black'>
        <div className='container'>
            <div>
                <div className="left-content text-white">
                    <span>Best Cocktails</span>
                    <b>Where every detail matters -from muddle to garnish</b>
                </div>
                <div className="right-content text-white">
                    <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <div>
                        <div>
                            <span>4.5</span> / 5
                        </div>
                        <p>More than +12000 customers </p>
                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-4 grid-rows-2 gap-5'>
                <div className='relative rounded-4xl col-span-1 '>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt1.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-2'>
                    <NoisyBg/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt2.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-1'>
                    <NoisyBg/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt5.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-2' >
                    <NoisyBg/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt3.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-2'>
                    <NoisyBg/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt4.png" alt="About Image 1" />
                </div>

            </div> */}
            <div className='flex flex-row  flex-wrap gap-5'>
                <div className='relative rounded-4xl col-span-1 md:w-[calc(100%_/_4_-_20px)]  sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square'>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt1.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-2 md:w-[calc(100%_/_2_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square'>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt2.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-1 md:w-[calc(100%_/_4_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square '>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt5.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-2 md:w-[calc(100%_/_3_*_2_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square' >
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt3.png" alt="About Image 1" />
                </div>
                <div className='relative rounded-4xl col-span-2 md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_-_20px)] w-full sm:aspect-auto aspect-square'>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt4.png" alt="About Image 1" />
                </div>

            </div>
        </div>
    </section>
  )
}
