import React, { useRef } from 'react'
import NoisyBg from './NoisyBg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText);

export default function AboutSection() {
    const aboutSection = useRef(null)
    useGSAP(()=>{
        let split = SplitText.create(".left-content b", { type: "lines" });
        const tl=gsap.timeline({
            scrollTrigger:".content-container"
        })
        tl.from(".left-content span",{
            opacity:0,
            duration:0.7
        })
        .from(split.lines,{
            y:50,
            opacity:0,
            stagger:0.1,
            duration:0.7,

        })
        gsap.from(".image-fadein",{
            opacity:0,
            duration:0.7,
            stagger:0.1,
            scrollTrigger:".image-fadein"
        })
    },{scope:aboutSection})
  return (
    <section ref={aboutSection} className='bg-black py-30 '>
        <div className='container'>
            <div className='content-container flex flex-col md:flex-row justify-between gap-5 mb-10'>
                <div className="left-content text-white flex flex-col items-start gap-5 max-w-lg">
                    <span className='px-5 py-2 bg-white rounded-4xl text-black text-sm'>Best Cocktails</span>
                    <b className='font-modern-negra text-[clamp(3rem,2.8676rem_+_0.5647vw,3.75rem)] leading-none font-light '>Where every detail matters -from muddle to garnish</b>
                </div>
                <div className="right-content text-white max-w-md flex flex-col gap-10">
                    <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <div>
                        <div className='text-3xl'>
                            <span className='text-[#e7d393] text-5xl font-bold'>4.5</span> / 5
                        </div>
                        <p className='text-sm'>More than +12000 customers </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row  flex-wrap gap-5'>
                <div className='image-fadein relative rounded-4xl col-span-1 md:w-[calc(100%_/_4_-_20px)]  sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square'>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt1.png" alt="About Image 1" />
                </div>
                <div className='image-fadein relative rounded-4xl col-span-2 md:w-[calc(100%_/_2_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square'>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt2.png" alt="About Image 1" />
                </div>
                <div className='image-fadein relative rounded-4xl col-span-1 md:w-[calc(100%_/_4_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square '>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt5.png" alt="About Image 1" />
                </div>
                <div className='image-fadein relative rounded-4xl col-span-2 md:w-[calc(100%_/_3_*_2_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-full sm:aspect-auto aspect-square' >
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt3.png" alt="About Image 1" />
                </div>
                <div className='image-fadein relative rounded-4xl col-span-2 md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_-_20px)] w-full sm:aspect-auto aspect-square'>
                    <NoisyBg className='rounded-4xl' imageClass="rounded-4xl"/>
                    <img className='w-full h-full rounded-4xl object-cover object-center' src="/About/abt4.png" alt="About Image 1" />
                </div>
            </div>
        </div>
    </section>
  )
}
