const Map = () => {
    return (
        <div className='w-full mt-12 grid grid-cols-2 bg-tyrian-purple bg-opacity-75' style={{
            width: '106%',
            marginLeft: '-3%'
        }}>
            <div className='bg-no-repeat bg-cover bg-center '
                 style={{
                     height: '40rem',
                     backgroundImage: `url('https://orientation.nust.edu.pk/assets/images/map-nust1.png')`
                 }}/>
            <div className='flex flex-col justify-center items-start p-16'>

                <h2 className='font-bold text-5xl uppercase mt-4 text-white mb-8'>Don&apos;t know
                    the
                    map?</h2>
                <p className='text-lg font-light mt-4 w-3/4 text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias animi, autem
                    consequuntur cum, doloribus earum ipsum minus placeat quas quis repudiandae vel velit, vitae
                    voluptatum? Beatae cupiditate dolore explicabo, harum, id necessitatibus nisi odio quas
                    soluta vero voluptate voluptatem.
                </p>
            </div>
        </div>
    )
}

export default Map;