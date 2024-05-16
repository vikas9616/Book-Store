import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';
function Freebook() {
  const filterData = list.filter((data) => data.category === "free")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='text-xl font-semibold'>Free Offerd Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus soluta at. Blanditiis quaerat nam dolor aut pariatur fuga ad. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga itaque eius iure repudiandae labore, quibusdam amet atque, eos illum libero asperiores animi hic eveniet, unde quod nesciunt! Excepturi, accusantium expedita.</p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item)=>(
              <Cards item ={item} key = {item.id}/>
            ))}
         
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook