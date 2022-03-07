import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src="images/about/img4.png" className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
                  About Us
                </h6> */}
                <h2 className="title">Hallo! wij zijn achieve.</h2>
              </div>
              <p>
                Achieve is een digital agency bestaande uit een kleine groep
                specialisten met ieder hun specifieke ambities, kwaliteiten en
                vaardigheden. Het team blijft constant op de hoogte van de
                nieuwste ontwikkelingen in het digitale landschap.{" "}
              </p>
              <p className="m-b30">
                Dat is voor ons geen opgave, omdat we van onze passie ons werk
                hebben gemaakt. Dit is wat we leuk vinden en daarom zijn we er
                ook goed in.
              </p>
              {/* <img src="images/sign.png" alt="" />
              <h4 className="m-b30">CEO Kareem</h4> */}
              <Link href="/diensten">
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Lees Meer…
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
