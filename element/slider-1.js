import Link from "next/link";
import Slider from "react-slick";

function Slider1() {
  return (
    <>
      <div
        className="banner-one"
        style={{ backgroundImage: "url(images/main-slider/slider1/pic2.png)" }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="img1">
              <img src="images/main-slider/slider1/pic3.png" alt="" />
            </div>
            <div className="img2">
              <img src="images/main-slider/slider1/pic4.png" alt="" />
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  {/*  <h6
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                    className="wow fadeInUp sub-title text-primary"
                  >
                    We Create Ideas
                  </h6> */}
                  <h1
                    data-wow-duration="1.2s"
                    data-wow-delay="1s"
                    className="wow fadeInUp "
                  >
                    Groeien op basis van{" "}
                    <span className="text-primary">data</span> en de kracht van{" "}
                    <span className="text-primary">creativiteit.</span>
                  </h1>
                  <p
                    data-wow-duration="1.4s"
                    data-wow-delay="1.5s"
                    className="wow fadeInUp m-b30"
                  >
                    Wij creëren, experimenteren en optimaliseren online
                    campagnes om bedrijven en/of merken te helpen groeien met
                    als resultaat meer bezoekers, kwalitatieve leads en keiharde
                    omzet.
                  </p>
                  <Link href="services-1">
                    <a
                      data-wow-duration="1.6s"
                      data-wow-delay="2s"
                      className="wow fadeInUp btn btn-link d-inline-flex align-items-center"
                    >
                      <i className="fa fa-angle-right m-r10"></i>Onze Diensten
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="dz-media move-box wow fadeIn"
                  data-wow-duration="1.6s"
                  data-wow-delay="0.8s"
                >
                  <img className="move-1" src="images/move/pic1.png" alt="" />
                  <img className="move-2" src="images/move/pic2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape19">
          <img src="/images/shape/shape18.png" alt="image" />
        </div>
        <div className="shape22">
          <img src="/images/shape/shape21.png" alt="image" />
        </div>
        <div className="shape23">
          <img
            src="https://hepro-react.envytheme.com/images/shape/shape22.svg"
            alt="image"
          />
        </div>
        <div className="shape24">
          <img src="/images/shape/shape23.png" alt="image" />
        </div>
        <div className="shape26">
          <img src="/images/shape/shape25.png" alt="image" />
        </div>
      </div>
    </>
  );
}

export default Slider1;
