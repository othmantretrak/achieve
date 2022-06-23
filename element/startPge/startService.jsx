import Link from "next/link";
import Slider from "react-slick";
import TypewriterComponent from "typewriter-effect";

function StartService() {
  return (
    <section
      className="py-5 start-service content-inner"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/tretrak/image/upload/v1651464694/achieve/bg5_wxvbja.jpg)",
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="align-items-center col-lg-4 col-sm-12 d-flex justify-content-center text-center">
            <div className="start-service-content  w-75">
              <img
                className="max-w200"
                src="https://svgshare.com/i/iYL.svg"
                alt=""
              />
              <h4> MEER WEBSITE VERKEER </h4>
            </div>
          </div>
          <div className="align-items-center col-lg-4 col-sm-12 d-flex justify-content-center text-center">
            <div className="start-service-content w-75">
              <img
                className="max-w200"
                src="https://svgshare.com/i/iVw.svg"
                alt=""
              />
              <h4>MEER CONVERSIES</h4>
            </div>
          </div>
          <div className="align-items-center col-lg-4 col-sm-12 d-flex justify-content-center text-center">
            <div className="start-service-content w-75">
              <img
                className="max-w200"
                src="https://svgshare.com/i/iWo.svg"
                alt=""
              />
              <h4> MEER WEBSITE VERKEER </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartService;
