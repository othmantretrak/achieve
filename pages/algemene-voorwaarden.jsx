import Header from "../layout/header";
import Footer from "../layout/footer";
import markdownStyles from "../component/markdown-styles.module.css";
import { getAllSiteInfo, getAllTerms } from "../lib/api";
import Banner2 from "../element/banner2";
import PostBody from "../component/post-body";
import Cta from "../element/cta";

function TermOfUse({ sitInfo, terms }) {
  return (
    <>
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Algemene voorwaarden" />
        {/* <!-- About Us --> */}
        <section className="content-inner pt-100px">
          <div className="container">
            <div className="row align-items-center">
              <div
                className=" m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className={markdownStyles.markdown}>
                  <PostBody content={terms && terms[0]?.body} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Cta />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  const terms = await getAllTerms(preview);
  //console.log({ cases });
  return {
    props: { sitInfo, terms },
    revalidate: 1,
  };
}
export default TermOfUse;
