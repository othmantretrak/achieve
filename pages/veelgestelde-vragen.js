import Footer from "../layout/footer";
import Header from "../layout/header";
import Accordion_sm from "../element/accordion_sm";
import { getAllFaq, getAllFaqCategories, getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";
import Faq3 from "../component/faq3";
import MetaTags from "../layout/MetaTags";

function FAQ1({ sitInfo, faqCategories, faqs }) {
  return (
    <>
      <MetaTags
        title="Veelgestelde vragen"
        keywords="Veelgestelde vragen"
        desc="Achieve Veelgestelde vragen"
      />
      <div className="page-content bg-gray">
        <Banner2 name="Veelgestelde vragen" />

        {/* <!-- Faq --> */}
        <section
          className="content-inner pt-100px"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png)",
          }}
        >
          <div className="container">
            <Faq3 categories={faqCategories} faqs={faqs} />
          </div>
        </section>
      </div>
      <Cta />
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
