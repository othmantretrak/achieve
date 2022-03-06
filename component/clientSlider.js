import Slider from "react-slick";
import { imageBuilder } from "../lib/sanity";

function ClientSlider({ companies }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(companies?.imagesGallery);
  return (
    <>
      <Slider {...settings}>
        {companies &&
          companies[0]?.imagesGallery?.map((c, i) => (
            <div key={i} className="item">
              <div className="clients-logo">
                <img src={imageBuilder(c).width(150).height(50).url()} alt="" />
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
}

export default ClientSlider;
