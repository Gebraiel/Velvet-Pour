import React, { useRef } from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import CocktailsSection from './CocktailsSection';


export default function Main() {

  return (
    <>
        <HeroSection/>
        <AboutSection/>
        <FeaturesSection/>
        <CocktailsSection/>
    </>
  )
}
