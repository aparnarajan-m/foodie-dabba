import React, { useState } from 'react';
import './Content.css';

const Content = () => {
    const [state, setState] = useState([
        { image: 'src/assets/p6.jpg' },
        { image: 'src/assets/p3.jpg' }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous image
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? state.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next image
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === state.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div className='slide-images'>
                <svg
                    onClick={handlePrevClick}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-left"
                >
                    <path d="M15 18L9 12l6-6" />
                </svg>

                <div className="slide-images-inner">
                    <img src={state[currentIndex].image} alt="slide" />
                </div>

                <svg
                    onClick={handleNextClick}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </div>
        </>
    );
};

export default Content;
