import { useState } from "react";
import { useTab } from "../common/useTabs";
import Colapsed from "../component/iconCompenents/Colapsed";
import { imageBuilder } from "../lib/sanity";

function AllServices({ services }) {
  const [open, setOpen] = useState("p2");

  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner  wow fadeInU"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png)",
        }}
      >
        <div className="container">
          <div className="row">
            {services &&
              services.map((s) => {
                return (
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
                        <Colapsed id={s._id}>{s.description}</Colapsed>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllServices;
