import {useRef, useState} from "react";
import Slider from 'react-slick';
import messages from "../../util/messages.json";
import Image from "next/image";
import Note from "./Note";

const Notes = ({messages}) => {

    let sliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className='py-16 relative ' style={{
            width: '106%',
            marginLeft: '-3%',
            padding: '3%'
        }}>
            <div className='my-20'>
                <div className='flex md:justify-between items-start md:items-end flex-col md:flex-row'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-tyrian-purple uppercase' style={{lineHeight: '120%'}}>
                        Messages<br/>
                        From Nustians
                    </h1>
                    <div className='flex w-full justify-end md:justify-start md:w-auto'>
                        <div onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                             className={`slidePrev select-none border-dark border-2 rounded-full h-14 w-14 flex justify-center items-center mr-4 ${currentSlide !== 0 ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}>
                            <svg className='h-6 w-6 rotate-180 fill-dark' xmlns="http://www.w3.org/2000/svg"
                                 width="240" height="236" viewBox="0 0 240 236">
                                <path className="cls-1"
                                      d="M192.3,45.7a9,9,0,0,1,0,12.728L49.289,201.439a9,9,0,0,1-12.728-12.728L179.574,45.7A9,9,0,0,1,192.3,45.7Z"/>
                                <path className="cls-1"
                                      d="M205.392,40.215a9,9,0,0,1-9,8.995H94.387a8.995,8.995,0,0,1,0-17.99H196.4A9,9,0,0,1,205.392,40.215Z"/>
                                <path className="cls-1"
                                      d="M197.634,32.722a8.995,8.995,0,0,0-8.995,9v102.01a8.995,8.995,0,0,0,17.99,0V41.717A8.995,8.995,0,0,0,197.634,32.722Z"/>
                            </svg>
                        </div>
                        <div onClick={() => sliderRef.current && sliderRef.current.slickNext()}
                             className={`slideNext select-none border-dark border-2 rounded-full h-14 w-14 flex justify-center items-center ${currentSlide !== (messages.length - 1) ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}>
                            <svg className='h-6 w-6 fill-dark' xmlns="http://www.w3.org/2000/svg" width="240"
                                 height="236" viewBox="0 0 240 236">
                                <path className="cls-1"
                                      d="M192.3,45.7a9,9,0,0,1,0,12.728L49.289,201.439a9,9,0,0,1-12.728-12.728L179.574,45.7A9,9,0,0,1,192.3,45.7Z"/>
                                <path className="cls-1"
                                      d="M205.392,40.215a9,9,0,0,1-9,8.995H94.387a8.995,8.995,0,0,1,0-17.99H196.4A9,9,0,0,1,205.392,40.215Z"/>
                                <path className="cls-1"
                                      d="M197.634,32.722a8.995,8.995,0,0,0-8.995,9v102.01a8.995,8.995,0,0,0,17.99,0V41.717A8.995,8.995,0,0,0,197.634,32.722Z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <Slider ref={sliderRef} dots={false} infinite={false} speed={500} slidesToShow={1}
                        slidesToScroll={1} beforeChange={(_, next) => setCurrentSlide(next)}>
                    {messages.map((message, key) => (
                        <Note message={message} key={key} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Notes;