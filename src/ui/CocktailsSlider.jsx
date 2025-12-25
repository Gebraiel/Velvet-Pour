import React, { useRef, useState } from "react";
import CocktailSlide from "./CocktailSlide";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";

const cocktails = [
  {
    name: "Classic Mojito",
    image: "/Cocktails/drink1.png",
    heading: "Simple Ingredients Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    name: "Raspberry Mojito",
    image: "/Cocktails/drink2.png",
    heading: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    name: "Violet Mojito",
    image: "/Cocktails/drink3.png",
    heading: "Simple Ingredients Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    name: "Curacao Mojito",
    image: "/Cocktails/drink4.png",
    heading: "Crafted With Care Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];
export default function CocktailsSlider() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef(null);
  const next = (active + 1) % cocktails.length;
  const prev =
    active === 0 ? cocktails.length - 1 : (active - 1) % cocktails.length;
  const animateIn = (slide) => {
    const image = slide.querySelector(".swiper-item .slide-image img");
    const leftContent = slide.querySelector('.swiper-item .slide-content .left-content')
    const rightContent = slide.querySelector('.swiper-item .slide-content .right-content')
    const tl = gsap.timeline();
    tl.fromTo(
      image,
      {
        opacity:0,
        scale: 0.95,
        duration: 0.8
      },
      {
        opacity:1,
        scale:1,
        duration: 0.8,
      }
    )
    .fromTo(leftContent,{
        opacity:0,
        x:-200
    },{
        opacity:1,
        x:0
    })
    .fromTo(rightContent,{
        opacity:0,
        x:200
    },{
        opacity:1,
        x:0
    },"<")
  };


  return (
    <div className="relative">
      <div className="max-w-6xl z-2 relative  m-auto navigation-buttons flex md:flex-row flex-col justify-between gap-2 mb-30">
        {cocktails.map((cocktail, index) => {
          return (
            <button
              key={cocktail.name}
              onClick={() => {
                setActive(index);
                swiperRef.current.slideTo(index);
              }}
              className={`cursor-pointer px-3 text-center text-3xl font-modern-negra border-b w-fit m-auto capitalize duration-300 ${
                active === index
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </div>
      <Swiper
        speed={0}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          animateIn(swiper.slides[swiper.activeIndex]);
        }}

        onSlideChangeTransitionEnd={(swiper) => {
          animateIn(swiper.slides[swiper.activeIndex]);
        }}
        spaceBetween="20"
        slidesPerView={1}
      >
        <div className="swiper-wrapper relative">
          {cocktails.map((cocktail) => (
            <SwiperSlide key={cocktail.name}>
              <CocktailSlide cocktail={cocktail} />{" "}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between z-1">
        <button
          className="cursor-pointer"
          onClick={() => {
            setActive(prev);
            swiperRef.current.slideTo(prev);
          }}
        >
          <p className="text-white font-modern-negra text-3xl max-w-[100px]">
            {cocktails[prev].name}
          </p>
          <img src="/prev-arrow.png" alt="Prev Arrow" />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => {
            setActive(next);
            swiperRef.current.slideTo(next);
          }}
        >
          <p className="text-white font-modern-negra text-3xl max-w-[100px]">
            {cocktails[next].name}
          </p>
          <img src="/next-arrow.png" alt="Prev Arrow" />
        </button>
      </div>
    </div>
  );
}
