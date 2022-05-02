import { useState } from "react";
import Colapsed from "../component/iconCompenents/Colapsed";
import { imageBuilder } from "../lib/sanity";

function AllServices({ services }) {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner pt-100px wow fadeInU"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png)",
        }}
      >
        <div className="container">
          <div className="row">
            {services &&
              services.map((s) => (
                <div
                  key={s._id}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.1s"
                >
                  <div
                    className={`${
                      open === s._id
                        ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                        : "icon-bx-wraper style-1 box-hover text-center m-b30"
                    }`}
                    onMouseOver={() => setOpen(s._id)}
                  >
                    <div className="icon-bx-md radius ">
                      <a href="#" className="icon-cell">
                        <img
                          src={imageBuilder(s.coverImage)
                            .width(337)
                            .height(337)
                            .url()}
                          alt={s.title}
                        />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">{s.title}</h4>
                      <Colapsed>{s.description}</Colapsed>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-website"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Web Development</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-pie-charts"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Web Solution</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-md radius bg-skyblue shadow-skyblue">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-dollar"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Company Branding</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-md radius bg-orange shadow-orange">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-line-graph"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">SEO & Marketing</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-md radius bg-maroon shadow-maroon">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-help"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">24X7 Support</h4>
                  <p>
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllServices;
