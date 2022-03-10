import React from "react";
import worksData from "../data/works1.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
///import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Works = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="work-carousel2 metro section-padding dark">
      <div className="container-fluid">
        <div className="container">
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="section-head style-3 text-center">
                <h2 className="title">Laatst toegevoegde case</h2>
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
                calculateHeight
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
                {worksData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    {/* -----------------ddddd------ */}

                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span
                            className="wow cimgio animated"
                            data-delay="500"
                            style={{ visibility: "visible" }}
                          ></span>
                          <img className="imgzbbi" src={slide.image} alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <a href="/works3/works3-dark/">{slide.title}</a>
                        </h6>
                        <h4>
                          <a href="/project-details2/project-details2-dark/">
                            {slide.secTex}
                          </a>
                        </h4>
                      </div>
                    </div>

                    {/* -----------------ddddd------ */}
                  </SwiperSlide>
                ))}
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
