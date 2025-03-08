import React from 'react'

const Hero = () => {
  return (
    <div className='text-white pt-24 md:pt-32 bg-black'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative'>
            <div className='mb-6'>
                <span className='text-[#999999] uppercase tracking-[0.2em] text-sm font-medium'>MORE THAN A WEBSITE BUILDER</span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.1] tracking-[-0.02em]'>Your site should do <br className="md:block hidden"/> more than good.</h1>
        </div>
    </div>
  )
}

export default Hero