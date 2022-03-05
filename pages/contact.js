import Link from "next/link";
import GoogleMaps from "../component/googleMap";
import SimpleMap from "../component/googleMap";
import googleMap from "../component/googleMap";
import Banner from "../element/banner";
import Banner2 from "../element/banner2";
import Quote3 from "../element/quote-3";
import Quote4 from "../element/quote-4";
import Footer from "../layout/footer";
import Footer3 from "../layout/footer-3";
import Header from "../layout/header";
import Header3 from "../layout/header-3";
import { getAllSiteInfo } from "../lib/api";

function ContactUs1({ sitInfo }) {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Contact" />
        {/* <!-- Banner End --> */}
        {/* <!-- Get A Quote --> */}
        <Quote4 />
        <div className="mapouter " style={{ marginBottom: "-7px" }}>
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="500px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Zuidplein 54, 3083 CW Rotterdam, Netherlands&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>

        {/* <SimpleMap /> */}
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
export default ContactUs1;
