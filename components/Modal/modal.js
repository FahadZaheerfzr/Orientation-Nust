import CardList from "../CardList/CardList";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Modal = ({data, schools, lifeAtNUST, type}) => {

    useEffect(() => {
        document.querySelector('body').style.overflowY = 'hidden';
        return () => {
            document.querySelector('body').style.overflowY = 'auto';
        }
    }, []);

    const router = useRouter();

    const handleClick = e => {
        e.stopPropagation();
        if (e.currentTarget) router.push('/gallery');
    }

    return (
        <>
            <div onClick={handleClick}
                 className='absolute top-0 left-0 w-full z-50 overflow-y-auto max-h-full'>
                <div className='flex justify-center items-center'>
                    <div className='my-12 w-1/2 rounded-3xl overflow-hidden bg-white'>
                        <div className='w-full h-96 bg-cover bg-no-repeat bg-center p-6'
                             style={{
                                 background: `linear-gradient(to top, rgba(114,2,64,0.3), rgba(114,2,64,0.3)), url(${data.image}) no-repeat top center`,
                                 backgroundSize: 'cover'
                             }}>
                            <p className='uppercase text-sm text-white'>{type}</p>
                            <h2 className='font-bold text-4xl text-white'>{data.name}</h2>
                        </div>

                        <p className='p-8 text-xl'>
                            School of Electrical Engineering and Computer Science (SEECS), formerly known as NUST
                            Institute
                            of Information Technology (NIIT), offers undergraduate, postgraduate, doctorate as well as
                            certificate level programs in all domains of the fields of Computers and Technology.
                            Currently
                            offering bachelor degrees in Computer Science, Software and Electrical Engineering, SEECS
                            lauds
                            itself on the state-of-the-art teaching and training technologies as well as a diverse
                            faculty
                            with degrees from leading national and international universities. SEECS also prides itself
                            in
                            its multiple research labs, working on national and international projects in the domains of
                            Machine Learning, Data Science, and more. Home to one of the two supercomputers in NUST
                            H-12,
                            SEECS consists of 3 departments, the Department of Computing, the Department of Electrical
                            Engineering, and the Department of Humanities and Sciences. NUST Chapter of IEEE is also
                            based
                            in SEECS. Home to the famous dome and glass bridge, SEECS boasts of the biggest school in
                            NUST
                            H-12, encompassing 3 different schools, RIMMS and IAEC. SEECS also has traditional yearly
                            events
                            like SEECS Got Talent and Sports Gala, held shortly after the start of the new academic
                            year.
                        </p>

                    </div>
                </div>
            </div>
            <div
                className='fixed top-0 left-0 w-full h-screen bg-prussian-blue bg-opacity-80 z-40'/>
            <CardList schools={schools} lifeAtNUST={lifeAtNUST}/>
        </>
    )
}

export default Modal;