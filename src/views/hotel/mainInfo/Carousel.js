import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

import { getHotelPhotos } from '../../../store/selectors/hotelSelectors'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.scss'

function NextArrow(props) {
  const { onClick } = props
  return <div className={clsx(styles.arrow, styles.right)} onClick={onClick} />
}

function PrevArrow(props) {
  const { onClick } = props
  return <div className={clsx(styles.arrow, styles.left)} onClick={onClick} />
}

export function Carousel() {
  const [imgSize, setImgSize] = useState('z')

  const hotelPhotos = useSelector(getHotelPhotos)
  const { hotelImages } = hotelPhotos

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setImgSize('y')
      } else {
        setImgSize('z')
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const settings = {
    dots: false,
    infinite: true,
    className: styles.carousel,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Slider {...settings}>
      {hotelImages &&
        hotelImages.map((hotelImage) => (
          <div key={hotelImage.imageId} className={styles.slide}>
            <div className={styles.imgWrapper}>
              <img
                src={hotelImage.baseUrl.replace('{size}', imgSize)}
                alt='hotelPhoto'
              />
            </div>
          </div>
        ))}
    </Slider>
  )
}
