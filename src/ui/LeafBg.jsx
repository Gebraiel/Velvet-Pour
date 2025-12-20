import React from 'react'

export default function LeafBg() {
  return (
    <div className='size-full absolute inset-0 z-1 flex justify-between'>
        <div className='translate-y-52 sm:w-fit w-28 h-fit'><img src="/left-leaf.png" alt="Left Leaf" /></div>
        <div className='sm:w-fit w-28 h-fit'><img src="/right-leaf.png" alt="Right Leaf" /></div>
    </div>
  )
}
