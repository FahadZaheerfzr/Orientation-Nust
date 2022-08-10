import {useEffect, useState} from "react";

const Events = ({events}) => {

    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    const [selectedActivity, setSelectedActivity] = useState(selectedEvent.activities[0]);

    useEffect(() => {
        setSelectedActivity(selectedEvent.activities[0]);
    }, [selectedEvent]);

    return (
        <div className='my-12'>
            <div className='mt-24'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-tyrian-purple'>
                    Upcoming Events
                </h1>
                <p className='text-xl font-normal text-center mt-4 opacity-70'>
                    View our event calendar to see upcoming events. Purchase tickets, <br/>VIP Bar Cards, or reserve VIP
                    tables with bottle service.
                </p>
            </div>

            <div className='flex justify-center items-center mt-8'>
                {events.map((event, i) => (
                    <p key={i}
                       onClick={() => setSelectedEvent(event)}
                       className={`text-xl font-semibold mx-12 cursor-pointer pb-2 transition duration-300 ease-out hover:text-tyrian-purple  relative after:content-[''] after:absolute after:h-0.5 after:bg-tyrian-purple after:left-0 after:bottom-0 after:transition after:duration-300 ${selectedEvent.day === event.day ? `text-tyrian-purple after:w-full` : ''}`}>
                        {event.day}
                    </p>
                ))}
            </div>

            <div className='grid event-grid mt-12 mx:0 lg:mx-48 faq-grid'>
                <div className=''>
                    {selectedEvent.activities.map((activity, i) => (
                        <div onClick={() => setSelectedActivity(activity)} key={i}
                             className={`w-64 h-64 cursor-pointer border-ultra-red ${selectedActivity.name === activity.name ? 'border-t-4 border-b-4 border-l-4' : 'border-r-4'}`}
                        >
                            <div className='w-full h-full' style={{
                                background: `linear-gradient(to top, rgba(114,2,64,0.3), rgba(114,2,64,0.3)), url(${activity.image}) no-repeat top center`,
                                backgroundSize: 'cover'
                            }}/>
                        </div>
                    ))}
                </div>
                <div className='w-full h-full bg-tyrian-purple border-t-4 border-b-4 border-r-4 border-ultra-red bg-cover bg-no-repeat p-12'
                     style={{
                         backgroundImage: `url(${selectedActivity.image})`,
                     }}>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white'>{selectedActivity.name}</h1>
                    <p className='text-lg opacity-50 mt-4 text-white'>{selectedActivity.date}</p>

                    <p className='text-xl text-white w-2/3 mt-12'>{selectedActivity.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Events;