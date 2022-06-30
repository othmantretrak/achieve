import Link from "next/link";
import TeamStartSvg from "../svgs/teamStart";

function StartAboutUs() {
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
                <TeamStartSvg />
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
                <h2 className="title">
                  Een team van specialisten inhuren voor een vast maandelijks
                  bedrag!
                </h2>
              </div>
              <p>
                Achieve kan het gehele adverteer proces uit handen nemen. Van de
                creatie, tot implementatie, het experimenteren en optimaliseren
                van online campagnes om jouw bedrijf en/of merk te helpen
                groeien met als resultaat meer bezoekers, naamsbekendheid,
                kwalitatieve leads en omzet.
              </p>
              <p className="m-b30">
                Het runnen van een onderneming is een veeleisende taak en
                hierdoor verlies je soms het zicht op alles wat je moet of kan
                doen. De focus is verspreid en vaak zien we dat marketing dan
                links blijft liggen.
              </p>
              <p className="m-b30">
                Wij zijn er van overtuigd dat in dit tijdperk het profileren van
                jouw merk met de juiste marketing bij de juiste doelgroep
                essentieel is voor de groei van je bedrijf. Precies dat is wat
                Achieve te bieden heeft.
              </p>
              {/* <img src="images/sign.png" alt="" />
              <h4 className="m-b30">CEO Kareem</h4> */}
              <Link href="/over-ons">
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

export default StartAboutUs;
