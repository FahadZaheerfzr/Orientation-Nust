import SplashComponent from "../components/SplashComponent/SplashComponent";
import MyParticles from "../components/Particles/Particles";


const Home = () => {
    return (
        <>
            <div className='mt-60 md:mt-64 relative z-30'>
                <SplashComponent/>
            </div>

            <MyParticles/>
        </>
    )
}

export default Home;