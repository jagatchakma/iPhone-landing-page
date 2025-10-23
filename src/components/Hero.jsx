import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1,
      duration: 1.5,
    })

    gsap.to('#ctn', {
      opacity: 1,
      delay: 2,
      duration: 1.5,
      y: -20
    })

  }, [])
  return (
    <div className='h-screen w-full nav-heigh relative  flex flex-col items-center justify-center'>
      <div className=' w-full flex flex-col items-center justify-center'>
        <p id='hero' className='hero-title opacity-0'>iPhone 15 pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video src="" className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <div id='ctn' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='bg-blue-500 p-2 rounded-xl'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </div>
  )
}

export default Hero