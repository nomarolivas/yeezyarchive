'use client';
import React, { useEffect, useState } from 'react';

import slide1 from '../assets/szn1cat.jpg';
import slide2 from '../assets/szn2cat.jpg';
import slide3 from '../assets/szn3cat.jpg';
import slide4 from '../assets/szn4cat.jpg';
import slide5 from '../assets/szn5cat.jpg';
import slide6 from '../assets/szn6cat.jpg';

const images = [ slide1, slide2, slide3, slide4, slide5, slide6];


const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000); // 
        return () => clearInterval(interval);
    }, []);


    return (
<div className="flex justify-center items-center">
        <div className=" relative w-[300px] h-[700px]  items-center justify-center">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    alt={`Slide ${index + 1}`}
                />
            ))}
        </div>
        </div>


    );
};

export default Home;
