import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {useRef, useState} from "react";
import Note from "./Note";
import Slider from "react-slick";

const Hero = () => {

    let sliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className='grid grid-cols-2' style={{minHeight: '80vh'}}>
            <div className='flex flex-col justify-start mt-16 items-start'>
                <h1 className='font-black text-10xl uppercase text-tyrian-purple -ml-2'>Orientation</h1>
                <h2 className='font-bold text-4xl uppercase text-tyrian-purple mt-4'>NUST &apos;22.</h2>
                <p className='text-lg font-light mt-4 w-3/4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Assumenda aut consectetur, eos
                    facilis ipsam magnam optio porro quaerat repellendus vitae. Lorem ipsum dolor sit amet,
                    consectetur adipisicing
                    elit. Assumenda aut consectetur, eos
                    facilis ipsam magnam optio porro quaerat repellendus vitae. Lorem ipsum dolor sit amet,
                    consectetur adipisicing
                    elit. Assumenda aut consectetur, eos
                    facilis ipsam magnam optio porro quaerat repellendus vitae. Lorem ipsum dolor sit amet,
                    consectetur adipisicing
                    elit. Assumenda aut consectetur, eos
                    facilis ipsam magnam optio porro quaerat repellendus vitae.
                </p>
                <button className='px-6 py-4 bg-tyrian-purple mt-8 text-white'>CLick me</button>
            </div>
            <div className='w-full h-full'>
                <Slider ref={sliderRef} dots={false} infinite={false} speed={500} slidesToShow={1}
                        slidesToScroll={1} beforeChange={(_, next) => setCurrentSlide(next)}>
                    <div>
                        <div className='w-full bg-tyrian-purple' style={{height: '500px'}}/>
                    </div>
                    <div>
                        <div className='w-full h-5/6 bg-ultra-red' style={{height: '500px'}}/>
                    </div>
                    <div>
                        <div className='w-full h-5/6 bg-tyrian-purple' style={{height: '500px'}}/>
                    </div>
                    <div>
                        <div className='w-full h-5/6 bg-ultra-red' style={{height: '500px'}}/>
                    </div>
                </Slider>
                <div className='flex justify-end items-center mt-6'>
                    <div onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                        className='w-16 h-16 rounded-full bg-tyrian-purple cursor-pointer flex justify-center items-center mr-4 transition duration-300 hover:bg-opacity-75'>
                        <FaAngleLeft color='#ffffff' size={24}/>
                    </div>
                    <div onClick={() => sliderRef.current && sliderRef.current.slickNext()}
                        className='w-16 h-16 rounded-full bg-tyrian-purple cursor-pointer flex justify-center items-center transition duration-300 hover:bg-opacity-75'>
                        <FaAngleRight color='#ffffff' size={24}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;