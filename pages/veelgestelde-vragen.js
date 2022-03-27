import Footer from "../layout/footer";
import Header from "../layout/header";
import Accordion_sm from "../element/accordion_sm";
import { getAllFaq, getAllFaqCategories, getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";
import Faq3 from "../component/faq3";

function FAQ1({ sitInfo, faqCategories, faqs }) {
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
            <Faq3 categories={faqCategories} faqs={faqs} />
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
  const faqCategories = await getAllFaqCategories(preview);
  //console.log({ cases });
  return {
    props: { sitInfo, faqs, faqCategories },
    revalidate: 1,
  };
}
export default FAQ1;
