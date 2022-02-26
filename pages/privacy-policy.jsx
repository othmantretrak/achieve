import { useState } from "react";
//import ModalVideo from 'react-modal-video';
import Header from "../layout/header-3";
import Footer from "../layout/footer";
import Counter from "../element/counter";
import TeamSlider from "../component/teamSlider";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Link from "next/link";
import Quote from "../element/quote";
import { getAllSiteInfo } from "../lib/api";

function PrivacyPolicy({ sitInfo }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Privacy verklaring</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Privacy verklaring
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div
                className=" m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="section-head style-1 mb-4">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    Privacy verklaring
                  </h6>
                  <h2 className="title">Achieve</h2>
                </div>
                <div className="row">
                  <div className="">
                    <p>
                      U bezoekt een website die deel uitmaakt van het online
                      netwerk van Achieve Deze privacyverklaring is van
                      toepassing op alle websites die behoren tot het netwerk
                      van Achieve, hierna te noemen Achieve, tenzij anders
                      vermeld. Achieve is verantwoordelijk voor de verwerking
                      van persoonsgegevens zoals weergegeven in deze privacy
                      verklaring. Persoonsgegevens die wij verwerken Achieve
                      verwerkt uw persoonsgegevens doordat u gebruik maakt van
                      onze diensten en/of omdat u deze zelf aan ons verstrekt.
                      Hieronder vindt u een overzicht van de persoonsgegevens
                      die wij verwerken:
                    </p>
                    <ul className="list-arrow primary">
                      <li>Bedrijfsnaam</li>
                      <li>Bedrijfsnaam</li>
                      <li>Voor- en achternaam</li>
                      <li>Telefoonnummer</li>
                      <li>E-mailadres</li>
                      <li>Bedrijfsadres</li>
                      <li>Bedrijfsadres</li>
                      <li>Gegevens over uw activiteiten op onze website</li>
                    </ul>
                    <p>
                      Bijzondere en/of gevoelige persoonsgegevens die wij
                      verwerken Onze website en/of dienst heeft niet de intentie
                      gegevens te verzamelen over websitebezoekers die jonger
                      zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders
                      of voogd. We kunnen echter niet controleren of een
                      bezoeker ouder dan 16 is. Wij raden ouders dan ook aan
                      betrokken te zijn bij de online activiteiten van hun
                      kinderen, om zo te voorkomen dat er gegevens over kinderen
                      verzameld worden zonder ouderlijke toestemming. Als u er
                      van overtuigd bent dat wij zonder die toestemming
                      persoonlijke gegevens hebben verzameld over een
                      minderjarige, neem dan contact met ons op via
                      info@achieve.nl dan verwijderen wij deze informatie. Met
                      welk doel en op basis van welke grondslag wij
                      persoonsgegevens verwerken
                    </p>
                    <ul className="list-arrow primary">
                      <li>
                        Bijzondere en/of gevoelige persoonsgegevens die wij
                        verwerken Onze website en/of dienst heeft niet de
                        intentie gegevens te verzamelen over websitebezoekers
                        die jonger zijn dan 16 jaar. Tenzij ze toestemming
                        hebben van ouders of voogd. We kunnen echter niet
                        controleren of een bezoeker ouder dan 16 is. Wij raden
                        ouders dan ook aan betrokken te zijn bij de online
                        activiteiten van hun kinderen, om zo te voorkomen dat er
                        gegevens over kinderen verzameld worden zonder
                        ouderlijke toestemming. Als u er van overtuigd bent dat
                        wij zonder die toestemming persoonlijke gegevens hebben
                        verzameld over een minderjarige, neem dan contact met
                        ons op via info@achieve.nl dan verwijderen wij deze
                        informatie. Met welk doel en op basis van welke
                        grondslag wij persoonsgegevens verwerken
                      </li>
                      <li>
                        Om het orderverloop bij Achieve zo aangenaam mogelijk te
                        laten verlopen, slaan wij met uw toestemming uw
                        persoonlijke gegevens en de gegevens met betrekking tot
                        uw bestelling en uw gebruik van onze diensten op.
                        Hierdoor kunnen wij de website personaliseren en in uw
                        voordeel verbeteren.
                      </li>
                      <li>
                        Om het orderverloop bij Achieve zo aangenaam mogelijk te
                        laten verlopen, slaan wij met uw toestemming uw
                        persoonlijke gegevens en de gegevens met betrekking tot
                        uw bestelling en uw gebruik van onze diensten op.
                        Hierdoor kunnen wij de website personaliseren en in uw
                        voordeel verbeteren.
                      </li>
                      <li>
                        Gegevens over het gebruik van onze site en de feedback
                        die we krijgen van onze bezoekers helpen ons om onze
                        site verder te ontwikkelen en te verbeteren.
                      </li>
                      <li>
                        Als u besluit een recensie te schrijven, kunt u zelf
                        kiezen of u uw naam of andere persoonlijke gegevens
                        toevoegt. We zijn benieuwd naar de meningen van onze
                        bezoekers. Wel behouden wij het recht van moderatie in
                        bijdragen die niet aan onze sitevoorwaarden voldoen.
                      </li>
                      <li>
                        Bij het verzenden van een online formulier of
                        offerteaanvraag, vragen wij naar uw contactgegevens
                        zodat wij terug kunnen komen op uw vraag/offerte. Bij
                        het afstaan van uw e-mailadres en/of telefoonnummer
                        geeft u toestemming dat wij u persoonlijk mogen
                        benaderen voor de opvolging.
                      </li>
                    </ul>
                    <p>Artikel 3. Offertes en aanbiedingen</p>
                    <ul className="list-arrow primary">
                      <li>
                        3.1 Alle offertes en aanbiedingen van Achieve hebben een
                        geldigheidsduur van 30 dagen, tenzij in de offerte een
                        ander termijn voor aanvaarding is gesteld.
                      </li>
                      <li>
                        3.2 Indien blijkt dat de bij de aanvraag of overeenkomst
                        door Opdrachtgever verstrekte gegevens onjuist waren
                        heeft Achieve het recht de prijzen hierover aan te
                        passen.
                      </li>
                      <li>
                        3.3 Achieve kan niet aan haar offertes of aanbiedingen
                        worden gehouden indien de Opdrachtgever redelijkerwijs
                        kan begrijpen dat de offertes of aanbiedingen, dan wel
                        een onderdeel daarvan, een kennelijke vergissing of
                        verschrijving bevat.
                      </li>
                      <li>
                        3.4 De in een offerte of aanbieding vermelde prijzen
                        zijn exclusief BTW en andere heffingen van
                        overheidswege, eventuele in het kader van de
                        overeenkomst te maken kosten, daaronder begrepen reis-
                        en verblijf-, verzend- en administratiekosten, tenzij
                        anders aangegeven.
                      </li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam diam tempor.</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Counter --> */}
        {/* <Counter /> */}

        {/* <!-- About Us --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    Watch Us
                  </h6>
                  <h2 className="title m-b15">
                    Watch How Our Team Help You To Achive Goal
                  </h2>
                  <p>
                    Suspendisse euismod eget lacus quis mattis. Nunc ut auctor
                    justo, et pulvinar lorem nteger tempor nisi venenatis
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-primary"
                        >
                          <i className="flaticon-chat"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">Online Support</h4>
                        <p>
                          Quisque efficitur consequat turpis, eget consequat
                          risus vulputate eunc ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-primary"
                        >
                          <i className="flaticon-bullhorn"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">Worldwide Marketing</h4>
                        <p>
                          Quisque efficitur consequat turpis, eget consequat
                          risus vulputate eunc ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="video-bx style-3">
                  <img src="images/video/pic3.jpg" alt="" />
                  <div className="video-btn">
                    <a
                      href="#"
                      className="popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
                </div>
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} /> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Team --> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
              <h2 className="title">Our Best Expertise</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <TeamSlider />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <Testimonial />

        {/* <!-- Blog --> */}
        <Blog />

        {/* <!-- Get A Quote --> */}
        <Quote />

        {/* <!-- Call To Action --> */}
        <section
          style={{
            backgroundImage: "url(images/background/bg5.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    More With Us
                  </h6>
                  <h2 className="title">
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link href="contact-us-1">
                  <a className="btn btn-link d-inline-flex align-items-center">
                    <i className="fa fa-angle-right m-r10"></i>Join Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer sitInfo={sitInfo} />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  //console.log({ cases });
  return {
    props: { sitInfo },
    revalidate: 1,
  };
}
export default PrivacyPolicy;
