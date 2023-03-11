import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = ({ images }) => {
  if (!images) return <></>;
  return (
    <Swiper
      navigation={false}
      modules={[Pagination]}
      className="min-h-max"
      slidesPerView={1}
      spaceBetween={40}
      direction="horizontal"
      pagination={{
        clickable: true,
      }}
      loop={false}>
      {images?.map((image: any, i: number) => (
        <SwiperSlide key={'portfolio-' + i.toString()} className="!h-auto">
          <img src={image.filename} alt="" className="h-full w-full object-contain object-center" loading="lazy" />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
