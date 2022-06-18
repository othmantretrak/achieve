import Slider from "react-slick";
import { imageBuilder } from "../lib/sanity";

function ClientSlider({ companies }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    //slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    arrows: false,
    swipe: true,
    swipeToSlide: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          //slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          //slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  //console.log(companies?.imagesGallery);
  return (
    <>
      <Slider {...settings}>
        {companies &&
          companies[0]?.imagesGallery?.map((c, i) => (
            <div key={i} className="item">
              <div className="clients-logo" style={{ width: "230px" }}>
                <img
                  src={imageBuilder(c).width(300).height(100).url()}
                  alt=""
                />
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
}

export default ClientSlider;
