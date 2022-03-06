import Fire from "../component/iconCompenents/Fire";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Quote4() {
  return (
    <>
      <div className="content-inner pt-100px">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 m-b30 wow fadeInLeft">
              <div className="section-heading text-center mb-3">
                <h2>Let&apos;s connect!</h2>
                <p className="d-none d-sm-block mt-4">
                  Vragen en/of opmerkingen? We helpen je graag verder.
                </p>
                <p className="d-block d-sm-none mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati.
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
                  <li className="contact-info color-3 bg-hover active hover-bottom text-center p-5 m-3">
                    <span>
                      <i
                        style={{ color: "#fc573b" }}
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
              className=" m-b30 wow fadeInRight col-12 col-lg-6 pt-4 pt-lg-0"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <form
                className="dlab-form dzForm"
                action="https://formsubmit.co/3trak10@gmail.com"
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

                  <div className="col-sm-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn btn-corner gradient btn-primary"
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                      Verzenden
                    </button>
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
