import Link from "next/link";
import Banner from "../element/banner";
import Banner2 from "../element/banner2";
import Quote3 from "../element/quote-3";
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
        <Banner2 name="Contact Us" />
        {/* <!-- Banner End --> */}

        {/* <!-- Get A Quote --> */}
        <Quote3 />
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
