import Fire from "../component/iconCompenents/Fire";
import CustomBtn from "./CustomBtn";

function onChange(value) {
  //console.log("Captcha value:", value);
}

function Quote4() {
  return (
    <>
      <div className="content-inner pt-100px">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 align-self-end wow fadeInLeft">
              <div className="section-heading text-center mb-3">
                <h2>Let&apos;s connect!</h2>
                <p className="d-sm-block mt-4">
                  Vragen en/of opmerkingen? We helpen je graag verder.
                </p>
              </div>
              <div className="contact-us">
                <ul>
                  <li className="contact-info color-1 bg-hover active hover-bottom text-center p-5 m-3">
                    <span>
                      <i
                        style={{ color: "#8639fa" }}
                        className="fas fa-mobile-alt fa-3x"
                      ></i>
                    </span>
                    <a className="d-block my-2" href="tel: 0031854016590">
                      <h3>+31 (0) 85 4016590</h3>
                    </a>
                    {/*  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p> */}
                  </li>
                  <li
                    style={{ marginBottom: "0px !important" }}
                    className="contact-info color-3 bg-hover active hover-bottom text-center p-5 m-3"
                  >
                    <span>
                      <i
                        style={{ color: "#8639fa" }}
                        className="fas fa-envelope-open-text fa-3x"
                      ></i>
                    </span>
                    <a
                      className="d-block my-2"
                      href={`mailto: info@achieve.nl`}
                    >
                      <h3>info@achieve.nl</h3>
                    </a>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p> */}
                  </li>
                </ul>
              </div>
            </div>

            <div
              className=" wow fadeInRight col-12 col-lg-6 pt-4 form-wrapper"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <form
                className="dlab-form dzForm"
                action="https://formsubmit.co/info@achieve.nl"
                method="POST"
              >
                <div className="dzFormMsg"></div>
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="Naam"
                        required
                        type="text"
                        className="form-control"
                        placeholder="Naam"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="Bedrijfsnaam"
                        required
                        type="text"
                        className="form-control"
                        placeholder="Bedrijfsnaam"
                      />
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://achieve-mauve.vercel.app/thankyou"
                  ></input>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="E-mailadres"
                        required
                        type="text"
                        className="form-control"
                        placeholder="E-mailadres"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="Telefoonnummer"
                        required
                        type="text"
                        className="form-control"
                        placeholder="Telefoonnummer"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-group">
                      <textarea
                        name="Opmerking"
                        required
                        className="form-control"
                        placeholder="Opmerking"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-12 contact-btn">
                    <div className=" custom-box">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="default-btn"
                      >
                        <div className="icon-text">
                          <i className="fa-solid fa-paper-plane"></i>
                          <p>Verzenden</p>
                        </div>
                        <span></span>
                      </button>
                    </div>
                    {/* <CustomBtn title="Verzenden" /> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote4;
