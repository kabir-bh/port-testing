import { motion } from 'framer-motion';
import './Hero.css'
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='bg-[#121212] relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col
        justify-center items-center mt-5'>
          <div>
            <h1 className={`${styles.heroHeadText}`}>I'm <span className='text-[#969595]'>Kabir</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A MERN stack engineer that <br
                className='sm:block hidden' />
              enjoys creating UI and web applications.

            </p>
          </div>


        </div>


      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center'>
        <a href="#about">
          <div className="scroll-down"></div>
        </a>
      </div>
    </section>
  )
}

export default Hero