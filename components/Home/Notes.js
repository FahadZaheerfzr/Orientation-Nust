import {useRef, useState} from "react";
import Slider from 'react-slick';
import messages from "../../util/messages.json";
import Image from "next/image";
import Note from "./Note";

const Notes = ({messages}) => {

    return (
        <div className='my-12'>
            <div className='mt-24'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-tyrian-purple'>
                    Messages from Nustians
                </h1>
                <p className='text-xl font-normal text-center mt-4 opacity-70'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est et
                    <br/> placeat quis! Dolores pariatur, sequi? Exercitationem facere.
                </p>
            </div>

            <div className='mt-8'>
                {new Array(messages.length).fill(0)
                    .map((_, i) => i).filter(elem => elem % 2 === 0)
                    .map((elem, i) => messages.slice(i*2, (i*2)+2))
                    .map((elem,i) => (
                        <div key={i} className={`grid gap-4 my-4 mx-0 schools-grid-${(i%2)+1}`}>
                            {elem.map((data, index) => (
                                <Note key={index} message={data}/>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notes;