import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useCallback } from "react";

import { loadFull } from "tsparticles";
import Particles from "react-particles";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handelChange = () => { }

  const handelSubmit = () => { }
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#121212] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Talk to me</p>
        <h3 className={styles.sectionHeadText}>Message.</h3>
        <form ref={formRef}
          onSubmit={handelSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white
             font-medium mb-4'>Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handelChange}
              placeholder='Enter your name.'
              className='background-[#808080] text-white placeholder:text-[#FFC0CB] py-4 px-6 rounded-lg outlined-none
            border-none font-medium'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white
             font-medium mb-4'>Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handelChange}
              placeholder='Enter your email.'
              className='background-[#808080] text-white placeholder:text-[#FFC0CB] py-4 px-6 rounded-lg outlined-none
            border-none font-medium'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white
             font-medium mb-4'>Message
            </span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handelChange}
              placeholder='Your message for me.'
              className='background-[#808080] text-white placeholder:text-[#FFC0CB] py-4 px-6 rounded-lg outlined-none
            border-none font-medium'></textarea>
          </label>
          <button
            type='submit'
            className='bg-[#FFA07A] py-3 px-8
          outline-none w-fit text-white
          font-bold shadow-md shadow-primary
          rounded-xl
          '>
            {loading ? 'Reaching...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      

    </div>
  )
}

export default SectionWrapper(Contact, "contact")