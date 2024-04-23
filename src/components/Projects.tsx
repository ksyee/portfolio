import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '@/components/SectionTitle';
import sgi from '@/assets/projects_thumbnail/SGI.png';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function Projects() {
  return (
    <section className="bg-primary px-32px text-white">
      <SectionTitle title="projects" />
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full overflow-hidden rounded-lg"
      >
        <SwiperSlide>
          <img
            src={sgi}
            alt="SGI 서울보증보험 클론코딩"
            className="transition duration-700 hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </section>
  );
}
