import { useState } from "react";
//import ModalVideo from 'react-modal-video';
import Header from "../layout/header";
import Footer from "../layout/footer";
import markdownStyles from "../component/markdown-styles.module.css";
import TeamSlider from "../component/teamSlider";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Link from "next/link";
import Quote from "../element/quote";
import { getAllPrivacy, getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import PostBody from "../component/post-body";
import Cta from "../element/cta";

function PrivacyPolicy({ sitInfo, privacy }) {
  const [isOpen, setOpen] = useState(false);
  console.log({ privacy: privacy[0] });
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Privacy policy" />
        {/* <!-- About Us --> */}
        <section className="content-inner pt-100px">
          <div className="container">
            <div className="row align-items-center">
              <div
                className=" m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                {/* <div className="section-head style-1 mb-4">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    {privacy && privacy[0]?.title}
                  </h6>
                </div> */}
                <div className={markdownStyles.markdown}>
                  <PostBody content={privacy && privacy[0]?.body} />
                </div>
              </div>
            </div>
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
  const privacy = await getAllPrivacy(preview);
  //console.log({ cases });
  return {
    props: { sitInfo, privacy },
    revalidate: 1,
  };
}
export default PrivacyPolicy;
