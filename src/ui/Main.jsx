import React, { useRef } from 'react'
import LeafBg from './LeafBg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(SplitText,ScrollTrigger);
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
            duration:0.7
        })

        videoRef.current.addEventListener("loadedmetadata",()=>{
            console.log(videoRef.current.duration);
            const videoTime = {t:0};
            gsap.to(videoTime,{
                t:videoRef.current.duration,
                scrollTrigger:{
                    target:".video-container video",
                    start:"top top",
                    scrub:true,
                    onUpdate:()=>videoRef.current.currentTime = videoTime.t
                }
            })
        })
    },{scope:heroSection})
  return (
    <>
    <section ref={heroSection} className='min-h-screen relative bg-black'>
        <LeafBg/>
        <div className='size-full absolute left-0 top-0 video-container'><div className='sticky top-0 left-0 '><video ref={videoRef} playsInline muted className='size-full object-cover' src="/bg-vd.mp4"></video></div></div>
        <div className='overlay absolute left-0 top-0 size-full'><img className='size-full object-cover' src="/noise.png" alt="Noise Bg" /></div>
        <div className='container z-1 relative h-screen'>
            <div className='py-20 text-white h-full flex flex-col justify-between'>
                <h1 className='text-[clamp(6.25rem,1.8382rem_+_18.8235vw,31.25rem)] hero-title uppercase font-modern-negra text-center linear-bg leading-none mt-20'>Mojito</h1>
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

        <div className='container z-1 relative h-screen cocktails-section'>
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
            <div className='flex justify-between z-1 absolute sm:-bottom-25 -bottom-20  w-full'>
                <div className='sm:w-fit w-30'><img src="/left-leaf.png" alt="" /></div>
                <div className='sm:w-fit w-30 -translate-y-10'><img src="/right-leaf.png" alt="" /></div>
            </div>




    </section>
    </>
  )
}
