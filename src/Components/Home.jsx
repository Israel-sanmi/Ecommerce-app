import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from './Products';

const Home = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='relative'>
            <div>
                <Slider {...settings}>
                    <div className='bg-firstImg bg-cover bg-center h-screen overflow-hidden bg-no-repeat'>
                    <div className='my-8 p-2 bg-white w-full'>
                            <h1 className='font-bold text-red-700 text-5xl uppercase '>New season <br /> arrivals</h1>
                            <h3 className='font-semibold text-3xl text-black uppercase'>check out all the trends</h3>
                            <button className='bg-red-500 rounded-md p-3 text-white text-lg'>
                                More Details
                            </button>
                        </div>
                    </div>
                    <div className='bg-secondImg bg-cover bg-center h-screen overflow-hidden bg-no-repeat'>
                    <div className='my-8 p-2 bg-white w-full'>
                            <h1 className='font-bold text-red-700 text-5xl uppercase '>New season <br /> arrivals</h1>
                            <h3 className='font-semibold text-3xl text-black uppercase'>check out all the new colored shirts</h3>
                            <button className='bg-red-500 rounded-md p-3 text-white text-lg'>
                                More Details
                            </button>
                        </div>
                    </div>
                    <div className='bg-thirdImg bg-cover bg-center h-screen overflow-hidden bg-no-repeat'>
                        <div className='my-8 p-2 bg-white w-full'>
                            <h1 className='font-bold text-red-700 text-5xl uppercase '>New season <br /> arrivals</h1>
                            <h3 className='font-semibold text-3xl text-black uppercase'>check out all the new vintages</h3>
                            <button className='bg-red-500 rounded-md p-3 text-white text-lg'>
                                More Details
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
            <Products/>
        </div>
    )
}

export default Home