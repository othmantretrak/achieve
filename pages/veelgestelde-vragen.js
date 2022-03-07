import Accordion1 from "../element/accordion";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Link from "next/link";
import Accordion_sm from "../element/accordion_sm";
import { getAllFaq, getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";

function FAQ1({ sitInfo, faqs }) {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <Banner2 name="Veelgestelde vragen" />

        {/* <!-- Faq --> */}
        <section
          className="content-inner pt-100px"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container  bg-gray">
            {/*  <div className="section-head style-3 text-center">
              <h2 className="title">Veelgestelde vragen</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div> */}
            <Accordion_sm faqs={faqs} />
          </div>
        </section>
      </div>
      <Cta />
      <Footer sitInfo={sitInfo} />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  const faqs = await getAllFaq(preview);
  //console.log({ cases });
  return {
    props: { sitInfo, faqs },
    revalidate: 1,
  };
}
export default FAQ1;
