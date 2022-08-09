import React from 'react'
import styles from './Splash.module.css'

export default function SplashComponent({onClick}) {
    return (
        <div onClick={onClick} className=' flex justify-center items-center w-full '>
            <div className={`cursor-pointer flex justify-center items-center shadow-xl hover:shadow-2xl hover:shadow-ultra-red transition duration-500 ease-out w-48 h-48 md:w-72 md:h-72 shadow-ultra-red rounded-full p-5 ${styles.logodiv}`}>
                <img className='w-2/3 animate-expand' src='/logo.png' alt='Logo' />
            </div>
        </div>
    )
}
