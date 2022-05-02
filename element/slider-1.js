import Link from "next/link";
import Slider from "react-slick";
import TypewriterComponent from "typewriter-effect";

function Slider1() {
  return (
    <>
      <div
        className="banner-one"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/tretrak/image/upload/v1651464605/achieve/pic2_eyr13d.png)",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="img1">
              <img
                src="https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic3_dcdbdc.png"
                alt=""
              />
            </div>
            <div className="img2">
              <img
                src="https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic4_x8fin9.png"
                alt=""
              />
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
                    <span className="text-primary">
                      <TypewriterComponent
                        options={{
                          strings: ["creativiteit."],
                          autoStart: true,
                          loop: true,
                          pauseFor: 9000,
                        }}
                      />
                    </span>
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
                  <Link href="/diensten">
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
                  <img
                    className="move-1"
                    src="https://res.cloudinary.com/tretrak/image/upload/v1651464519/achieve/pic1_gbggfi.png"
                    alt=""
                  />
                  <img
                    className="move-2"
                    src="https://res.cloudinary.com/tretrak/image/upload/v1651464519/achieve/pic2_n14ugc.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape19">
          <img
            src="https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape18_xykoos.png"
            alt="image"
          />
        </div>
        <div className="shape22">
          <img
            src="https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape21_l90uqd.png"
            alt="image"
          />
        </div>
        <div className="shape23">
          <img
            src="https://hepro-react.envytheme.com/images/shape/shape22.svg"
            alt="image"
          />
        </div>
        <div className="shape24">
          <img
            src="https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape23_ygdtix.png"
            alt="image"
          />
        </div>
        <div className="shape26">
          <img
            src="https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape25_k6db7h.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}

export default Slider1;
