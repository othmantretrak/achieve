import { useState } from "react";
//import ModalVideo from 'react-modal-video';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Testimonial2 from "../element/testimonial-2";
import { getAllSiteInfo, getAllTeams, getAllTestimonials } from "../lib/api";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";
import OurPromises from "../component/OurPromises";
import TeamFinal from "../element/teamFinal";
import MetaTags from "../layout/MetaTags";

function AboutUs1({ sitInfo, team, testimonials }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <MetaTags title="Over ons" keywords="Over ons" desc="Achieve Over ons" />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Over ons" />
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
        <section className="content-inner pt-100px">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dz-media">
                  <img src="images/about/img4.png" className="move-3" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="section-head style-1 mb-4">
                  {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
                    Over ons
                  </h6> */}
                  <h2 className="title">Hallo! Wij zijn Achieve.</h2>
                </div>
                <p>
                  Achieve is een digital agency bestaande uit een kleine groep
                  specialisten met ieder hun specifieke ambities, kwaliteiten en
                  vaardigheden. Het team blijft constant op de hoogte van de
                  nieuwste ontwikkelingen in het digitale landschap. Dat is voor
                  ons geen opgave, omdat we van onze passie ons werk hebben
                  gemaakt. Dit is wat we leuk vinden en daarom zijn we er ook
                  goed in.
                </p>
                <p className="m-b30">
                  De voortdurend veranderende digitale wereld was ooit een ‘nice
                  to have’, maar is tegenwoordig een kritische succesfactor voor
                  elk bedrijf. Of het nu gaat om het bereiken van prospects, het
                  communiceren met klanten, of het rechtstreeks verkopen van
                  diensten of producten, het internet heeft de manier waarop we
                  zaken doen veranderd. Juist doordat die technologie continu
                  doorontwikkelt, is het belangrijk dat bedrijven hun digitale
                  aanwezigheid mee laten veranderen. Zo blijf je relevant en bij
                  de tijd.
                </p>
                <p className="m-b30">
                  Heb je zelf geen specialistische kennis in huis? Is het
                  aannemen van specialisten te duur? Druk met je eigen zaak?
                  Geen tijd voor marketing activiteiten? Dat is precies waar
                  Achieve kan helpen. Wij ondersteunen jouw bedrijf bij de groei
                  naar het volgende niveau. Dat doen we niet alleen, maar samen
                  met jou en je team. Jij kent de doelgroep van je onderneming
                  beter dan wie dan ook en samen bereiken we het meest. Geef je
                  digital marketing uit handen maar blijf op de hoogte middels
                  maandelijkse rapportages en advies van specialisten. Door
                  middel van creativiteit, technologie en data verbinden we de
                  juiste mensen aan jouw merk.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <OurPromises />
      {/* <Team team={team} /> */}
      <TeamFinal team={team} />
      {/* <Team team={team} /> */}
      <Testimonial2 testimonials={testimonials} />
      <Cta />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  const team = await getAllTeams(preview);
  const testimonials = await getAllTestimonials(preview);
  //console.log({ team });
  return {
    props: { sitInfo, team, testimonials },
    revalidate: 1,
  };
}
export default AboutUs1;
