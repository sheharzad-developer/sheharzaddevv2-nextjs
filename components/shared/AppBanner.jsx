import { motion } from 'framer-motion'
import { FiArrowDownCircle } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import { useRef, Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
// SVG will be referenced directly in Image component
import { useLanguage } from '../../context/LanguageContext'

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg" />
})

function AppBanner() {
  const [activeTheme] = useThemeSwitcher()
  const [isClient, setIsClient] = useState(false)
  const [lottieVisible, setLottieVisible] = useState(false)
  const lottieContainerRef = useRef(null)
  const { t, currentLanguage } = useLanguage()

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    setIsClient(true)
    if (!lottieContainerRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setLottieVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(lottieContainerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className={`flex flex-col sm:justify-between items-center ${currentLanguage === 'ur' ? 'sm:flex-row-reverse' : 'sm:flex-row'} mt-8 sm:mt-12 lg:mt-16`}
    >
      <div className={`w-full sm:w-1/2 ${currentLanguage === 'ur' ? 'text-right' : 'text-left'} mb-8 sm:mb-0 ${currentLanguage === 'ur' ? 'sm:pl-8' : 'sm:pr-8'}`}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1
          }}
          className={`font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-center ${currentLanguage === 'ur' ? 'sm:text-right' : 'sm:text-left'} text-ternary-dark dark:text-primary-light`}
        >
          {t('banner.greeting').replace('Sheharzad', '').replace('شہرزاد صلاح الدین', '').replace('شہرزاد', '').replace('シェハルザード', '').replace('शहेरज़ाद', '').replace('谢哈尔扎德', '').replace('Шехарзад', '')}
          <span style={{ color: 'rgb(129, 140, 248)' }}>
            {t('banner.greeting').includes('Sheharzad') ? 'Sheharzad' :
              t('banner.greeting').includes('شہرزاد') ? 'شہرزاد' :
                t('banner.greeting').includes('シェハルザード') ? 'シェハルザード' :
                  t('banner.greeting').includes('शहेरज़ाद') ? 'शहेरज़ाद' :
                    t('banner.greeting').includes('谢哈尔扎德') ? '谢哈尔扎德' : // Chinese case
                      t('banner.greeting').includes('Шехарзад') ? 'Шехарзад' :   // Russian case
                        t('banner.greeting').includes('AT-Sheharzad') ? 'Sheharzad' :
                          t('banner.greeting').includes('Österreichisches Deutsch') ? 'Österreichisches Deutsch' :
                            'شہرزاد'}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.15
          }}
          className={`font-general-medium mt-2 text-lg md:text-xl lg:text-2xl text-center ${currentLanguage === 'ur' ? 'sm:text-right' : 'sm:text-left'} text-gray-600 dark:text-gray-300`}
        >
          Full-Stack Developer & AI Enthusiast
        </motion.h2>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2
          }}
          className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'
        >
          {t('banner.description')}
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3
          }}
          className={`flex justify-center ${currentLanguage === 'ur' ? 'sm:flex sm:justify-end' : 'sm:block'}`}
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-12 mb-6 sm:mb-0">
            <a
              download='Sheharzad-Resume.pdf'
              href='/files/Sheharzad-Resume.pdf'
              className='font-general-medium flex justify-center items-center text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500 transform hover:scale-105 transition-all'
              style={{ width: '17rem' }}
              aria-label='Download Resume'
            >
              <FiArrowDownCircle className='ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100'></FiArrowDownCircle>
              <span className='text-sm sm:text-lg duration-100'>{t('banner.downloadCV')}</span>
            </a>

            <a
              href='https://calendly.com/sheharzad-salahuddin9000'
              target='_blank'
              rel='noopener noreferrer'
              className='font-general-medium flex justify-center items-center w-64 text-lg border-2 border-indigo-500 py-2.5 sm:py-3 px-4 shadow-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white duration-500 transform hover:scale-105 transition-all'
              aria-label='Book a Call'
            >
              <span className='text-sm sm:text-lg duration-100'>{t('banner.bookCall')} ☕</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
        className='w-full sm:w-1/2 flex flex-col items-center sm:justify-end mb-8 sm:mb-0'
      >
        <div className={`w-full flex justify-center ${currentLanguage === 'ur' ? 'sm:justify-start' : 'sm:justify-end'}`}>
          <div className='w-full h-[300px] sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] relative'>
            <Image
              src="/images/bannerImg.2a08b5b3.svg"
              alt="Banner illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AppBanner
