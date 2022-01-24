import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

import { getHotelPhotos } from '../../store/selectors/hotelSelectors'

import styles from './SimpleSlider.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { color, margin } from '@mui/system'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        width: '20px',
        height: '25px',
        background: 'black',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        width: '20px',
        height: '25px',
        background: 'black',
      }}
      onClick={onClick}
    />
  )
}

export function SimpleSlider() {
  const hotelPhotos = useSelector(getHotelPhotos)
  const { hotelImages } = hotelPhotos
  console.log(hotelImages)

  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    className: 'slider',
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {hotelImages &&
          hotelImages.map((hotelImage) => (
            <div className={styles.slide}>
              <img
                key={hotelImage.imageId}
                src={hotelImage.baseUrl.replace('{size}', 'z')}
                alt='hotelPhoto'
              />
            </div>
          ))}
      </Slider>
    </div>
  )
}
