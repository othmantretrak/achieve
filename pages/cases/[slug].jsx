import { useState } from "react";
import { useRouter } from "next/router";
import ModalVideo from "react-modal-video";

import Image from "next/image";
import { getAllCases, getOneCase } from "../../lib/api";
import Banner2 from "../../element/banner2";
import { imageBuilder } from "../../lib/sanity";
import Cta from "../../element/cta";
import Works from "../../component/works";
import Accordion_sm from "../../element/accordion_sm";

function CaseDetails({ cases, post }) {
  const [isOpen, setOpen] = useState("");
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  //console.log("faq", post[0]?.faq);
  let qst = {
    aklantvraag: "Klantvraag",
    bstrategie: "Strategie",
    doelstelling: "Doelstelling",
  };
  const getIdYoutube = (ytb) => {
    let regex =
      /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(ytb)[3];
  };
  let faqsii =
    post[0]?.faq &&
    Object.keys(post[0]?.faq)?.map((x) => {
      return {
        question: qst[x],
        answer: post[0].faq[x],
        filtered: true,
      };
    });
  //console.log({ faq: post[0]?.faq });
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
            <div className="section-1 padding-top-100px ">
              <div className="row">
                <div className="col-md-6 p-3">
                  <h3>CASE</h3>
                  <h1>{post[0].title}</h1>
                  <p>{post[0].aboutCase}</p>
                  <h5>Geleverde diensten</h5>
                  <ul className="d-flex flex-row justify-content-around">
                    {post[0].GeleverdeDiensten?.split(",").map((x) => (
                      <li key={x} className="font-13">
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 p-3">
                  <Image
                    src={imageBuilder(post[0]?.coverImage)?.url()}
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
            {post[0]?.caseLogo && post[0].WhoClient && (
              <div className="section-2 padding-top-100px ">
                <div className="section-head style-3 text-center">
                  <h2 className="title">Wie is de klant?</h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className="row caselogo justify-content-center flex-row">
                  <div className="border-5 logo-img overflow-hidden p-3 rounded-circle">
                    <Image
                      src={imageBuilder(post[0]?.caseLogo)?.url()}
                      alt=""
                      width="300"
                      height="300"
                      className="p-4"
                    />
                  </div>
                  <div className="mt-5 text-center w-75 whoclient">
                    <p>{post[0].WhoClient}</p>
                  </div>
                </div>
              </div>
            )}
            {post[0]?.youtube && (
              <div className="section-3 padding-top-100px ">
                <div className="mx-auto section-head text-center">
                  <h2 className="title">Het resultaat</h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className="justify-content-center my-4 row videos-gallery">
                  {post[0]?.youtube &&
                    post[0]?.youtube.split(",").map((t) => (
                      <div key={t} className="col-md-6 p-2">
                        <div className="video-bx style-3">
                          <Image
                            src={`https://img.youtube.com/vi/${getIdYoutube(
                              t
                            )}/maxresdefault.jpg`}
                            alt=""
                            width="1000"
                            height="600"
                          />
                          <div className="video-btn">
                            <a
                              href="#"
                              className="popup-youtube"
                              onClick={() => setOpen(t)}
                            >
                              <i className="flaticon-play"></i>
                            </a>
                          </div>
                          {typeof window !== "undefined" &&
                            post[0]?.youtube && (
                              <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen == t}
                                videoId={getIdYoutube(t)}
                                onClose={() => setOpen(false)}
                              />
                            )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {post[0]?.faq && (
              <div className="section-4 padding-top-100px ">
                <div className="container ">
                  <div className="section-head style-3 text-center">
                    <h2 className="title">Onze aanpak</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <Accordion_sm faqs={faqsii} />
                </div>
              </div>
            )}
            {post[0]?.testimonial && (
              <div className="section-5 padding-top-100px  testimo">
                <div className="mx-auto section-head style-3 text-center">
                  <h2 className="title">De ervaring</h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className="d-flex mx-auto position-relative justify-content-center wrapper">
                  <Image
                    src={imageBuilder(
                      post[0]?.testimonial?.testimonialImg
                    )?.url()}
                    alt=""
                    width="1000"
                    height="600"
                    className="mx-auto rounded-md w-75"
                  />

                  <div className="position-absolute textwrapper  d-flex">
                    <div className="">
                      <h6 className="fa-2x">
                        {post[0]?.testimonial?.testititle}
                      </h6>
                      <p>{post[0]?.testimonial?.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="section-6 padding-top-100px  works-cases">
              <Works cases={cases} title="Bekijk ook andere cases" />
            </div>
          </div>
        </section>
        <Cta />
      </div>
    </>
  );
}
export async function getStaticProps({ params }) {
  const cases = await getAllCases();
  const post = await getOneCase(params?.slug);
  //console.log(`Building slug: ${params?.slug}`);
  let filtredData = cases.filter((d) => d.slug !== params?.slug);
  console.log(`Building cases: ${post[0]}`);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      cases: filtredData,
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 1,
  };
}
export const getStaticPaths = async () => {
  const res = await getAllCases();
  console.log(res);
  const paths = res.map(
    (post) =>
      post?.coverImage && {
        params: { slug: post?.slug },
      }
  );
  return { paths, fallback: "blocking" };
};
export default CaseDetails;
