import Link from "next/link";

function StartWhatYouGet() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
                  About Us
                </h6> */}
                <h2 className="title">Wat krijg je van ons?</h2>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-arrow primary">
                    <li>
                      Een open gesprek om elkaar te leren kennen, de behoefte en
                      mogelijkheden te bespreken.
                    </li>
                    <li>De keuze om een huisstijl handboek te laten creëren</li>
                    <li>Website analyse + advies</li>
                    <li>Content strategie</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-arrow primary">
                    <li>De keuze om content te laten creëren</li>
                    <li>De gekozen manier van adverteren instellen</li>
                    <li>Datum communiceren van de lancering van de campagne</li>
                    <li>De campagne monitoren en optimaliseren.</li>
                    <li>Maandelijkse rapportage en advies. </li>
                  </ul>
                </div>
                <p className="px-2">
                  Het belangrijkste is dat je een samenwerking aangaat met een
                  enthousiast team dat zin heeft om jouw onderneming naar het
                  volgende niveau te tillen.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img
                  src="https://res.cloudinary.com/tretrak/image/upload/v1655956965/achieve/undraw_buffer_wq43_dpt5j8.svg"
                  className="move-1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StartWhatYouGet;
