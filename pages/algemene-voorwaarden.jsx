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

function TermOfUse() {
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
              <h1>Algemene voorwaarden</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Algemene voorwaarden
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
                    Algemene voorwaarden
                  </h6>
                  <h2 className="title">Hallo! Wij zijn Achieve.</h2>
                </div>
                <h3>Artikel 1. Definities</h3>
                <div className="row">
                  <div className="">
                    <p>In de navolgende bepalingen wordt verstaan onder:</p>
                    <ul className="list-arrow primary">
                      <li>
                        1.1. Achieve: een eenmanszaak Achieve, kantoorhoudende
                        te Ruigoord 43, 3079 XM Rotterdam, Nederland en
                        ingeschreven bij de Kamer van Koophandel onder
                        dossiernummer 76815889.
                      </li>
                      <li>
                        1.2. Opdrachtgever: de natuurlijke of rechtspersoon die
                        handelt in de uitoefening van beroep of bedrijf en die
                        met Achieve een overeenkomst heeft afgesloten.
                      </li>
                      <li>
                        1.3. Algemene Voorwaarden: het geheel van de bepalingen
                        als hierna opgenomen.
                      </li>
                      <li>
                        1.4. Overeenkomst: elke wederzijdse acceptatie,
                        telefonisch, schriftelijk of per e-mail bevestigd, van
                        levering van één of meer producten of diensten van
                        Achieve.
                      </li>
                    </ul>
                    <p>Artikel 2. Toepasselijkheid</p>
                    <ul className="list-arrow primary">
                      <li>
                        2.1 Deze Voorwaarden zijn van toepassing op alle
                        overeenkomsten die tussen Achieve en een Opdrachtgever
                        gesloten worden, alsmede op iedere in dat kader door een
                        Opdrachtgever aan Achieve verstrekte opdracht.
                      </li>
                      <li>
                        2.2 Voor zover daarvan in onderlinge overeenstemming
                        tussen partijen niet schriftelijk is afgeweken, zijn
                        onderstaande artikelen in deze Algemene Voorwaarden van
                        toepassing op elke aanbieding, offerte, opdracht of
                        overeenkomst van of met Achieve.
                      </li>
                      <li>
                        2.3 De onderhavige voorwaarden zijn eveneens van
                        toepassing op overeenkomsten met Achieve voor de
                        uitvoering waarvan door Achieve derden dienen te worden
                        betrokken.
                      </li>
                      <li>
                        2.4 Eventuele inkoop- of andere voorwaarden van
                        opdrachtgever c.q. derden zijn voor Achieve niet bindend
                        en de toepasselijkheid van dergelijke voorwaarden wordt
                        uitdrukkelijk uitgesloten.
                      </li>
                      <li>
                        2.5 Door het verstrekken van een opdracht – het zij
                        telefonisch hetzij schriftelijk – erkent de
                        opdrachtgever van de inhoud van deze Algemene
                        Voorwaarden op de hoogte te zijn en verklaart hij zich
                        daarmee akkoord, indien en voor zover het bestaan van
                        deze Algemene Voorwaarden tevoren aan hem is medegedeeld
                        of indien er bij de offerte en/of bij de telefonische of
                        schriftelijke orderbevestiging naar werd verwezen.
                      </li>
                      <li>
                        2.6 Indien één of meerdere bepalingen in deze Algemene
                        Voorwaarden op enig moment geheel of gedeeltelijk nietig
                        zijn of vernietigd mochten worden, dan blijft het
                        overige in deze Algemene Voorwaarden bepaalde volledig
                        van toepassing. Achieve en de Opdrachtgever zullen
                        alsdan in overleg treden teneinde nieuwe bepalingen ter
                        vervanging van de nietige of vernietigde bepalingen
                        overeen te komen, waarbij zoveel als mogelijk het doel
                        en de strekking van de oorspronkelijke bepalingen in
                        acht wordt genomen.
                      </li>
                      <li>
                        2.7 Indien onduidelijkheid bestaat omtrent de uitleg van
                        één of meerdere bepalingen van deze Algemene
                        Voorwaarden, dan dient de uitleg plaats te vinden ‘naar
                        de geest’ van deze bepalingen.
                      </li>
                      <li>
                        2.8 Indien zich tussen partijen een situatie voordoet
                        die niet in deze Algemene Voorwaarden geregeld is, dan
                        dient deze situatie te worden beoordeeld naar de geest
                        van deze Algemene Voorwaarden.
                      </li>
                      <li>
                        2.9 Indien Achieve niet steeds strikte naleving van deze
                        Voorwaarden verlangt, betekent dit niet, dat de
                        bepalingen daarvan niet van toepassing zijn, of dat
                        Achieve in enigerlei mate het recht zou verliezen om in
                        andere gevallen de stipte naleving van de bepalingen van
                        deze voorwaarden te verlangen.
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
      <Footer />
    </>
  );
}

export default TermOfUse;
