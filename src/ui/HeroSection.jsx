import React, { useRef } from 'react'
import LeafBg from './LeafBg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import NoisyBg from './NoisyBg';
gsap.registerPlugin(SplitText,ScrollTrigger);

export default function HeroSection() {
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
    const heroSection = useRef(null);
    const videoRef = useRef(null);
    useGSAP(()=>{
        let split = SplitText.create(".hero-title", { type: "chars" });
        let rightContent = SplitText.create(".right-content p",{type:"lines"})
        let leftContent = SplitText.create(".left-content b",{type:"lines"})
        console.log(split)
        const tl = gsap.timeline();
        tl.from(split.chars,{
            y:200,
            opacity:0,
            stagger:0.1,
            duration:0.7
        })
        .from([rightContent.lines,leftContent.lines],{
            y:20,
            opacity:0,
            stagger:0.1,
            duration:0.7
        }).from(".left-content p,.right-content span",{
            opacity:0,
            duration:0.7
        },"<")
        gsap.from(".cocktail.left-to-right",{
            x:-100,
            scrollTrigger:".cocktail.left-to-right",
            opacity:0,
            stagger:0.1,
            duration:0.7
        })
        gsap.from(".cocktail.right-to-left",{
            x:100,
            scrollTrigger:'.cocktail.right-to-left',
            opacity:0,
            stagger:0.1,
            duration:0.7,

        })
        gsap.from(".left-leaf",{
            x:-200,
            y:200,
            scrollTrigger:{
                target:".left-leaf",
                scrub:true
            }
        })
         gsap.from(".right-leaf",{
            x:200,
            y:200,
            scrollTrigger:{
                target:".left-leaf",
                scrub:true
            }
        })
        videoRef.current.addEventListener("loadedmetadata",()=>{
            console.log(videoRef.current.duration);
            const videoTime = {t:0};
            gsap.to(videoTime,{
                t:videoRef.current.duration,
                scrollTrigger:{
                    target:".video-container video",
                    start:"top top",
                    pin:true,
                    scrub:true,
                    onUpdate:()=>videoRef.current.currentTime = videoTime.t
                }
            })
        })
    },{scope:heroSection})
  return (
    <section ref={heroSection} className='min-h-screen relative bg-black'>
        <LeafBg/>
        <div className='size-full absolute left-0 top-0 video-container'><div className='sticky w-full h-screen top-0 left-0 '><video ref={videoRef} playsInline muted className='size-full object-cover' src="/bg-vd.mp4"></video></div></div>
        <NoisyBg/>
        <div className='container z-1 relative h-screen'>
            <div className='py-20 text-white h-full flex flex-col justify-between'>
                <h1 className='text-[clamp(5rem,1.4706rem_+_15.0588vw,25rem)] leading-0 hero-title uppercase font-modern-negra text-center linear-bg leading-none mt-20'>Mojito</h1>
                <div className='flex sm:flex-row flex-col justify-between'>
                    <div className='left-content opacity-100 max-w-xs'>
                        <p className=''>Cool. Crisp. Classic</p>
                        <b className='text-6xl font-modern-negra text-[#e7d393]'>Sip the Spirit of Summer</b>
                    </div>
                    <div className='right-content max-w-3xs'>
                        <p className='mb-5 text-justify'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes
                         designed to delight your senses.</p>
                        <span>View cocktails</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='container z-1 relative h-screen cocktails-section flex justify-center items-center'>
            <div className='flex sm:flex-row flex-col justify-between gap-10 w-full'>
                <div className='left-menu lg:w-1/4 sm:w-1/2 w-full'>
                    <b className='text-white text-2xl'>Most Popular Cocktails:</b>
                    <ul className='flex flex-col gap-5 mt-5'>
                        {
                            popularCocktails.map((cocktail)=>{
                                return(
                                    <li key={cocktail} className='cocktail left-to-right flex justify-between gap-5'>
                                        <span className='flex flex-col'>
                                            <b className='text-[#e7d393] md:text-4xl text-2xl font-modern-negra'>{cocktail.name}</b>
                                            <small className='text-white'>{cocktail.size}</small>
                                        </span>
                                        <span className='text-white'>- {cocktail.price}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='right-menu lg:w-1/4 sm:w-1/2 w-full'>
                    <b className='text-white text-2xl'>Most Loved Cocktails:</b>
                    <ul className='flex flex-col gap-5 mt-5'>
                        {
                            lovedCocktails.map((cocktail)=>{
                                return(
                                    <li key={cocktail} className='cocktail right-to-left flex justify-between gap-5'>
                                        <span className='flex flex-col'>
                                            <b className='text-[#e7d393] md:text-4xl text-2xl font-modern-negra'>{cocktail.name}</b>
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
            <div className='flex justify-between z-1 absolute sm:-bottom-25 -bottom-20  w-full overflow-hidden'>
                <div className='sm:w-fit w-30 left-leaf'><img src="/left-leaf.png" alt="" /></div>
                <div className='sm:w-fit w-30 -translate-y-10 right-leaf'><img src="/right-leaf.png" alt="" /></div>
            </div>




    </section>
  )
}
