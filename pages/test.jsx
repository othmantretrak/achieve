import { useState } from "react";
import { useRouter } from "next/router";
//import ModalVideo from "react-modal-video";

import Image from "next/image";
//import { getAllCases, getAllSiteInfo, getOneCase } from "../../lib/api";
import Banner2 from "../element/banner2";
//import { imageBuilder } from "../../lib/sanity";
//import PostBody from "../../component/post-body";
import Cta from "../element/cta";

function CaseDetails({ sitInfo, post }) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const getIdYoutube = (ytb) => {
    let regex =
      /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(ytb)[3];
  };

  return (
    <>
      <div className="page-content bg-white ">
        <Banner2 name="" />
        <section
          className="content-inner-2 case-details-test"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-3">
                <h3>CASE</h3>
                <h1>ProBoxspring</h1>
                <p>
                  Op zoek naar een nieuwe boxspring? Dan bent u bij ons aan het
                  juiste adres! Wij van ProBoxspring zitten al meer dan 30 jaar
                  in het vak van slapen. Van slapen hebben wij ons werk gemaakt.
                  En om ons werk goed uit te kunnen voeren moeten wij elke dag
                  goed uitgerust en fit wakker worden. Dat doen wij door op de
                  beste bedden te slapen.
                </p>
                <h5>Geleverde diensten</h5>
                <ul className="d-flex flex-row justify-content-around">
                  <li className="font-13">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Shopify Website</span>
                  </li>
                  <li className="font-13">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Woocommerce</span>
                  </li>
                  <li className="font-13">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Shopify Website</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 p-3">
                <Image
                  src="https://cdn.sanity.io/images/2v5nba1d/production/fddaf602d7ff151aad2a21a4597e807c41feb1be-1000x600.jpg"
                  alt=""
                  width="1000"
                  height="600"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 p-3">
                <Image
                  src="https://res.cloudinary.com/tretrak/image/upload/v1651810309/achieve/rtrtrrr_nzge8y.png"
                  alt=""
                  width="300"
                  height="300"
                  className="rounded-md"
                />
              </div>
              <div className="col-md-6 p-3">
                <div className="section-head style-3 text-center">
                  <h2 className="title">Veelgestelde vragen</h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <p>
                  Op zoek naar een nieuwe boxspring? Dan bent u bij ons aan het
                  juiste adres! Wij van ProBoxspring zitten al meer dan 30 jaar
                  in het vak van slapen. Van slapen hebben wij ons werk gemaakt.
                  En om ons werk goed uit te kunnen voeren moeten wij elke dag
                  goed uitgerust en fit wakker worden. Dat doen wij door op de
                  beste bedden te slapen.
                </p>
              </div>
              <div className="section-head style-3 text-center">
                <h2 className="title">Veelgestelde vragen</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
              <div className="row">
                <div className="col-md-6 p-3">
                  <Image
                    src="https://cdn.sanity.io/images/2v5nba1d/production/fddaf602d7ff151aad2a21a4597e807c41feb1be-1000x600.jpg"
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
                <div className="col-md-6 p-3">
                  <Image
                    src="https://cdn.sanity.io/images/2v5nba1d/production/fddaf602d7ff151aad2a21a4597e807c41feb1be-1000x600.jpg"
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
                <div className="col-md-6 p-3">
                  <Image
                    src="https://cdn.sanity.io/images/2v5nba1d/production/fddaf602d7ff151aad2a21a4597e807c41feb1be-1000x600.jpg"
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
                <div className="col-md-6 p-3">
                  <Image
                    src="https://cdn.sanity.io/images/2v5nba1d/production/fddaf602d7ff151aad2a21a4597e807c41feb1be-1000x600.jpg"
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
                <div className="col-md-6 p-3">
                  <Image
                    src="https://cdn.sanity.io/images/2v5nba1d/production/fddaf602d7ff151aad2a21a4597e807c41feb1be-1000x600.jpg"
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
                <div className="col-md-6 p-3">
                  <Image
                    src="https://cdn.sanity.io/images/2v5nba1d/production/fddaf602d7ff151aad2a21a4597e807c41feb1be-1000x600.jpg"
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </div>
    </>
  );
}
/* export async function getStaticProps({ params }) {
  const sitInfo = await getAllSiteInfo();
  const post = await getOneCase(params?.slug);
  console.log(`Building case: ${post}`);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { sitInfo, post: JSON.parse(JSON.stringify(post)) },
    revalidate: 1,
  };
}
export const getStaticPaths = async () => {
  const res = await getAllCases();
  //console.log(res);
  const paths = res.map(
    (post) =>
      post.coverImage && {
        params: { slug: post.slug },
      }
  );
  return { paths, fallback: "blocking" };
}; */
export default CaseDetails;
