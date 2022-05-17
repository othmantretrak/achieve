import React from "react";
import worksData from "../data/works1.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { imageBuilder } from "../lib/sanity";

const Works = ({ cases, title }) => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  //console.log({ cases });
  return (
    <section className="work-carousel2 metro section-padding dark">
      <div className="container-fluid">
        <div className="container">
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="section-head style-3 text-center">
                <h2 className="title">{title}</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                className="swiper-wrapper"
                slidesPerView={2}
                autoHeight
                calculateheight="true"
                centeredSlides={true}
                autoplay={{ delay: 2000 }}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                }}
              >
                {cases.map(
                  (slide) =>
                    slide.coverImage && (
                      <SwiperSlide key={slide._id} className="swiper-slide">
                        {/* -----------------ddddd------ */}

                        <Link href={`/cases/${slide.slug}`}>
                          <a style={{ color: "none" }}>
                            <div className="content">
                              <div className="img">
                                <span className="imgio">
                                  <span
                                    className="wow cimgio animated"
                                    data-delay="500"
                                    style={{ visibility: "visible" }}
                                  ></span>
                                  <Image
                                    className="imgzbbi"
                                    src={imageBuilder(slide?.coverImage)?.url()}
                                    alt=""
                                    width={1000}
                                    height={600}
                                  />
                                </span>
                              </div>
                              <div className="cont">
                                <h6>{slide.title}</h6>
                                <h4>{slide.title}</h4>
                              </div>
                            </div>
                          </a>
                        </Link>
                        {/* -----------------ddddd------ */}
                      </SwiperSlide>
                    )
                )}
              </Swiper>
              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
              >
                <i className="fa-solid fa-angle-right"></i>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
              >
                <i className="fa-solid fa-angle-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
