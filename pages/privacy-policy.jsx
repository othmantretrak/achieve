import Header from "../layout/header";
import Footer from "../layout/footer";
import markdownStyles from "../component/markdown-styles.module.css";
import { getAllPrivacy, getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import PostBody from "../component/post-body";
import Cta from "../element/cta";
import MetaTags from "../layout/MetaTags";

function PrivacyPolicy({ sitInfo, privacy }) {
  return (
    <>
      <MetaTags
        title="Privacy policy"
        keywords="Privacy policy"
        desc="Achieve Privacy policy"
      />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Privacy policy" />
        {/* <!-- About Us --> */}
        <section className="content-inner ">
          <div className="container">
            <div className={markdownStyles.markdown}>
              <PostBody content={privacy && privacy[0]?.body} />
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
  const privacy = await getAllPrivacy(preview);
  //console.log({ cases });
  return {
    props: { sitInfo, privacy },
    revalidate: 1,
  };
}
export default PrivacyPolicy;
