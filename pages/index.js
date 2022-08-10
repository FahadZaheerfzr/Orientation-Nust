import SplashComponent from "../components/SplashComponent/SplashComponent";
import MyParticles from "../components/Particles/Particles";
import {useEffect, useRef, useState} from "react";
import Hero from "../components/Home/Hero";
import Map from "../components/Home/Map";
import Notes from "../components/Home/Notes";
import messages from '../util/messages.json';
import events from '../util/events.json';
import Experience from "../components/Home/Experience";
import Events from "../components/Home/Events";

const Home = ({messages, events}) => {

    const [click, setClick] = useState(false);

    const splashRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            splashRef.current.style.display = click ? 'none' : 'flex';
            containerRef.current.style.opacity = click ? 1 : 0;
        }, 500);
    }, [click]);

    return (
        <>

            <div ref={splashRef} style={{height: '80vh'}}
                 className={`flex justify-center items-center relative z-30 transition duration-500 ease-in-out ${click ? 'opacity-0' : 'opacity-100'}`}>
                <SplashComponent onClick={() => setClick(true)}/>
            </div>

            <MyParticles/>

            <div ref={containerRef}
                 className={`mt-24 transition-opacity duration-500 ease-in-out ${click ? 'block' : 'hidden'}`}>

                <Hero/>

                <Map/>

                <Events events={events}/>

                <Notes messages={messages}/>

                <Experience/>

            </div>
        </>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            messages, events
        },
    }
}

export default Home;