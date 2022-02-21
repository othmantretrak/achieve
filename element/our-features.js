import ReactTextCollapse from "react-text-collapse";
import Branding from "../component/iconCompenents/Branding";
import Colapse from "../component/iconCompenents/Colapse";
import Seo from "../component/iconCompenents/Seo";
import SocialAds from "../component/iconCompenents/SocialAds";

function Features() {
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false,
    collapseText: "Lees Meer…",
    expandText: "show less",
    minHeight: 100,
    maxHeight: "auto 0",
    textStyle: {
      color: "#896eff",
      borderRadius: "5px",
      fontSize: "15px",
      fontWeight: "500",
    },
  };
  return (
    <>
      <section className="content-inner-2">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-7 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  Fetures
                </h6>
                <h2 className="title">
                  Our Working Process To Help Your Boost Your Business
                </h2>
              </div>
              <div className="section-wraper-one">
                <div className="icon-bx-wraper style-2 left m-b30">
                  <div className="icon-bx-md radius bg-white text-red">
                    <a href="javascript:void(0);" className="icon-cell">
                      <Seo />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title">Search Engine Advertising</h4>
                    <Colapse>
                      <p>
                        In Search Engine Advertising (SEA) heb je de
                        mogelijkheid om betaald reclame te maken voor je
                        producten en diensten in de zoekmachine Google,
                        partnersites van Google en YouTube. De kracht zit in het
                        presenteren van jouw product of dienst door middel van
                        een advertentie aan de doelgroepen die daar al naar op
                        zoek zijn, affiniteit mee hebben of je website al eerder
                        bezocht hebben. SEA vergroot daarmee jouw relevantie en
                        vindbaarheid bij je doelgroepen zodat zowel de
                        naamsbekendheid en uiteindelijk het aantal conversies
                        wordt vergroot.
                      </p>
                    </Colapse>
                  </div>
                </div>
                <div className="icon-bx-wraper style-2 left m-b30">
                  <div className="icon-bx-md radius bg-white text-yellow">
                    <a href="javascript:void(0);" className="icon-cell">
                      <SocialAds />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title">Social Advertising</h4>
                    <Colapse>
                      <p>
                        Bij Social Advertising maak je betaald reclame op social
                        media zoals Facebook, Instagram en LinkedIn. Dankzij de
                        grote hoeveelheid bruikbare data op deze platformen, kan
                        je zeer gericht adverteren op
                      </p>
                    </Colapse>
                  </div>
                </div>
                <div className="icon-bx-wraper style-2 left m-b30">
                  <div className="icon-bx-md radius bg-white text-green">
                    <a href="javascript:void(0);" className="icon-cell">
                      <Branding />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title">Branding</h4>
                    <Colapse>
                      <p>
                        Branding is het bewust creëren en versterken van een
                        gewenst beeld van een product, dienst of merk om een
                        gunstige positie ten opzichte van concurrenten te
                        realiseren van datgene dat achter het product, dienst
                      </p>
                    </Colapse>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-5 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="dlab-media">
                <img src="images/about/img5.png" className="move-2" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
