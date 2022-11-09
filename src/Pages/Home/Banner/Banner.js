import React from 'react';
import image1 from '../../../assets/slide/life_coach1.jpeg'
import image2 from '../../../assets/slide/life_coach2.jpeg'
import image3 from '../../../assets/slide/life_coach3.jpeg'
import image4 from '../../../assets/slide/life_coach4.jpeg'

const Banner = () => {
    return (
        <div className="carousel h-96 m-4 w-full">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <img src={image1} alt="image1" className="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <img src={image2} alt="image2" className="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full justify-center">
                <img src={image3} alt="image3" className="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full justify-center">
                <img src={image4} alt="image4" className="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;