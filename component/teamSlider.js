import Slider from "react-slick";
import { imageBuilder } from "../lib/sanity";

function TeamSlider({ team }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        {team &&
          team.map((t) => (
            <div
              key={t._id}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <div className="dlab-team style-1 m-b10">
                <div className="dlab-media">
                  <img
                    src={imageBuilder(t.coverImage)
                      .width(337)
                      .height(337)
                      .url()}
                    alt={t.name}
                  />
                </div>
                <div className="dlab-content">
                  <div className="clearfix">
                    <h4 className="dlab-name">
                      <a>{t.name}</a>
                    </h4>
                    <span className="dlab-position">{t.profession}</span>
                  </div>
                  <ul className="dlab-social-icon primary-light">
                    <li>
                      <a href={t.email} className="fa fa-envelope"></a>
                    </li>
                    <li>
                      <a
                        href={t.instagram}
                        className="fa-brands fa-instagram"
                      ></a>
                    </li>
                    <li>
                      <a href={t.twitter} className="fa-brands fa-twitter"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        {/* 
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              <img
                src="https://achieve.nl/wp-content/uploads/2022/02/Jana-01.jpg"
                alt=""
              />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Jana Kruit</a>
                </h4>
                <span className="dlab-position">Online marketeer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="jana@achieve.nl" className="fa fa-envelope"></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login?lang=en"
                    className="fa-brands fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              <img
                src="https://achieve.nl/wp-content/uploads/2022/02/Erik-01.jpg"
                alt=""
              />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Erik Weller</a>
                </h4>
                <span className="dlab-position">Advisor</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="erik@achieve.nl" className="fa fa-envelope"></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login?lang=en"
                    className="fa-brands fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              <img
                src="https://achieve.nl/wp-content/uploads/2022/02/42a43ed5-cad9-48ef-bd11-e35aa84168c9.jpg"
                alt=""
              />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Ricardo Puriel</a>
                </h4>
                <span className="dlab-position">Online marketeer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="ricardo@achieve.nl" className="fa fa-envelope"></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login?lang=en"
                    className="fa-brands fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              <img
                src="https://achieve.nl/wp-content/uploads/2022/02/ebb4ba32-50cc-4584-bf1a-91d086a284ab.jpg"
                alt=""
              />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Busra van Deursen</a>
                </h4>
                <span className="dlab-position">Graphic designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="busra@achieve.nl" className="fa fa-envelope"></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login?lang=en"
                    className="fa-brands fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              <img
                src="https://achieve.nl/wp-content/uploads/2022/02/68fc5dd9-ee53-4d35-806c-68c459711989.jpg"
                alt=""
              />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Angelique Nauta</a>
                </h4>
                <span className="dlab-position">Digital creative</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="angelique@achieve.nl" className="fa fa-envelope"></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login?lang=en"
                    className="fa-brands fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.7s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              <img src="images/team/pic1.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Alina Jia</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://en-gb.facebook.com/"
                    className="fa fa-envelope"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login?lang=en"
                    className="fa-brands fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </Slider>
    </>
  );
}

export default TeamSlider;
