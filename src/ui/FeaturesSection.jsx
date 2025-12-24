import React, { useRef } from 'react'
import CheckIcon from './CheckIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
export default function FeaturesSection() {
  const featuresSection = useRef(null)
  useGSAP(()=>{
    const tl = gsap.timeline({
        duration:0.5,
        scrollTrigger:{
        trigger:featuresSection.current,
        pin:true,
        start:"top top",
        end:5000,
        scrub:true,
      }
    });
    tl.to('.big-title,.features-list',{
      opacity:0,

    })
    .to('.subtitle',{
      opacity:0,

    })
    tl.to(".big-title,.features-list",{
      height:0,
    })
    .fromTo(
      '.masked-image',
      {
        maskSize: '70%',
      },
      {
        maskSize: '500%',

      }
    )
    .to(".secondary-content",{

        opacity:1
      }
    )
  })
  return (
        <section ref={featuresSection} className='radial-bg features-section h-screen bg-black py-30 flex justify-center items-center'>
            <div className='container'>
                <h1 className='big-title text-center text-[#505050] font-modern-negra text-[clamp(6rem,1.5441rem_+_19.0118vw,31.25rem)] mt-10 whitespace-nowrap leading-0 absolute left-1/2 -translate-x-1/2'>The ART</h1>
                <div className='text-white grid md:grid-cols-[auto_1fr_auto] grid-cols-2 gap-5 justify-between items-center z-1'>
                  <ul className='space-y-2 features-list md:order-1 order-2'>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Handpicked ingredients</li>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Signature techniques</li>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Bartending artistry in action</li>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Freshly muddled flavors</li>
                  </ul>
                  <div className='md:col-span-1 col-span-2 md:order-2 order-1'><img className='masked-image rounded-4xl' src="/Features/bg-img.jpg" alt="Background Image" /></div>
                  <ul className='space-y-2 features-list order-3'>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Perfectly balanced blends</li>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Garnished to perfection</li>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Ice-cold every time</li>
                    <li className='flex gap-2 md:text-lg text-xs'><CheckIcon/>Expertly shaken & stirred</li>
                  </ul>
                </div>
               <div className='relative'>
                 <p className='text-white text-center md:text-5xl text-3xl  font-modern-negra subtitle absolute left-1/2 -translate-x-1/2 top-0'>Sip-Worthy Perfection</p>
                 <div className='text-white text-center absolute left-1/2 -translate-x-1/2 top-0 secondary-content opacity-0 mt-5 w-full'>
                    <h2 className='md:text-5xl text-2xl font-modern-negra'>Made with Craft Poured with Passion</h2>
                    <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                 </div>
               </div>
            </div>

        </section>
  )
}
