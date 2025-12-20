
import React from 'react'

export default function NoisyBg({className="",imageClass=""}) {
  return (
        <div className={`overlay absolute left-0 top-0 size-full ${className}`}><img className={`size-full object-cover ${imageClass}` }src="/noise.png" alt="Noise Bg" /></div>

  )
}
