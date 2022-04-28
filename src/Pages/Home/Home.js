import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='relative'>
            <div id='home'>
            </div>
            <div className='absolute top-5 w-full mx-auto'>
                <h1 className='text-5xl text-center m-5 font-bold text-blue-600'>Make the world Beautiful</h1>
                <div className='border-1 border-blue-600'>
                    <form className='flex justify-center'>
                        <input type="text" required className='h-8 border-2 focus:border-blue-300 border-r-0 pl-1 border-blue-300 rounded-l-lg' />
                        <input type="submit" value="Search" className='h-8 bg-blue-400 px-2 border-2  border-l-0 border-blue-300 rounded-r-lg cursor-pointer' />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Home;