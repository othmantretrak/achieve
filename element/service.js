import { useEffect, useState } from "react";
// import { WOW } from "wowjs";
import Colapsed from "../component/iconCompenents/Colapsed";
function Service() {
  const [open, setOpen] = useState("p2");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className="content-inner-2 wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Services
            </h6>
            <h2 className="title">Onze diensten</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-office"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Search Engine Advertising</h4>
                  <Colapsed>
                    In Search Engine Advertising (SEA) heb je de mogelijkheid om
                    betaald reclame te maken voor je producten en diensten in de
                    zoekmachine Google, partnersites van Google en YouTube. De
                    kracht zit in het presenteren van jouw product of dienst
                    door middel van een advertentie aan de doelgroepen die daar
                    al naar op zoek zijn, affiniteit mee hebben of je website al
                    eerder bezocht hebben. SEA vergroot daarmee jouw relevantie
                    en vindbaarheid bij je doelgroepen zodat zowel de
                    naamsbekendheid en uiteindelijk het aantal conversies wordt
                    vergroot.
                  </Colapsed>
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
                  <h4 className="dlab-title">Social Advertising</h4>
                  <Colapsed>
                    Bij Social Advertising maak je betaald reclame op social
                    media zoals Facebook, Instagram en LinkedIn. Dankzij de
                    grote hoeveelheid bruikbare data op deze platformen, kan je
                    zeer gericht adverteren op bijvoorbeeld demografie,
                    geografie en de interesses van jouw doelgroepen. Die data
                    gebruiken we vervolgens om soortgelijke mensen te vinden,
                    mensen te retargetten waar je interactie mee hebt gehad en
                    jouw bereik steeds verder uit te bouwen. Met al deze
                    factoren kun je een community bouwen, naamsbekendheid
                    vergroten, social platformen boosten en conversies
                    vergroten. Hierdoor is social advertising een zeer waardevol
                    advertentiemiddel.
                  </Colapsed>
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
                  <h4 className="dlab-title">Branding</h4>
                  <Colapsed>
                    Branding is het bewust creëren en versterken van een gewenst
                    beeld van een product, dienst of merk om een gunstige
                    positie ten opzichte van concurrenten te realiseren van
                    datgene dat achter het product, dienst of merk schuilgaat.
                    De representatie van de persoonlijkheid van je bedrijf is
                    tegenwoordig erg belangrijk. Hierdoor kunnen mensen een
                    verbintenis voelen met je bedrijf dat verder gaat dan
                    interesse in je product of dienst, waardoor je langere
                    relaties opbouwt en je er meer loyale en meer spenderende
                    klanten aan over houdt. Dit doe je door het oproepen van de
                    juiste, positieve en onderscheidende associaties bij de
                    relevante doelgroepen in je communicatie en visuele
                    uitingen.
                  </Colapsed>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
