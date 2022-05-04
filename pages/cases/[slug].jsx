import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { useState } from "react";
import { useRouter } from "next/router";
import ModalVideo from "react-modal-video";

import Image from "next/image";
import AllServices from "../../element/all-services";
import Link from "next/link";
import { getAllCases, getAllSiteInfo, getOneCase } from "../../lib/api";
import Banner from "../../element/banner";
import Banner2 from "../../element/banner2";
import { imageBuilder } from "../../lib/sanity";
import PostBody from "../../component/post-body";
import Cta from "../../element/cta";

function CaseDetails({ sitInfo, post }) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  //console.log(post);

  const getIdYoutube = (ytb) => {
    let regex =
      /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(ytb)[3];
  };

  //console.log({ youtubeId: getIdYoutube(post[0].youtube) });
  return (
    <>
      <div className="page-content bg-white case-details">
        {/* <!-- Banner  --> */}
        <Banner2 name={post[0].title} />
        {/* <!-- Banner End --> */}

        {/* <!-- Services Details --> */}
        <section
          className="content-inner-2 case-details"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="dlab-media text-center m-b30 rounded-md">
                  <Image
                    src={imageBuilder(post[0]?.coverImage)?.url()}
                    alt=""
                    width="1000"
                    height="600"
                    className="rounded-md"
                  />
                </div>
                <div className="dlab-content">
                  {/* <div className="m-b40">
                    <PostBody content={post[0]?.body} />
                  </div> */}
                  <div className="row">
                    <div className="col-lg-12">
                      <PostBody content={post[0]?.body} />
                    </div>
                  </div>
                  <div className="justify-content-center my-4 row videos-gallery">
                    {post[0]?.youtube &&
                      post[0]?.youtube.split(",").map((t) => (
                        <div key={t} className="col-md-6 p-2">
                          <div className="video-bx style-3">
                            <Image
                              src={imageBuilder(post[0]?.coverImage)?.url()}
                              alt=""
                              width="1000"
                              height="600"
                            />
                            <div className="video-btn">
                              <a
                                href="#"
                                className="popup-youtube"
                                onClick={() => setOpen(true)}
                              >
                                <i className="flaticon-play"></i>
                              </a>
                            </div>
                            {typeof window !== "undefined" &&
                              post[0]?.youtube && (
                                <ModalVideo
                                  channel="youtube"
                                  autoplay
                                  isOpen={isOpen}
                                  videoId={getIdYoutube(t)}
                                  onClose={() => setOpen(false)}
                                />
                              )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Service --> */}
        {/*  <AllServices /> */}

        {/* <!-- Call To action --> */}
        <Cta />
      </div>
    </>
  );
}
export async function getStaticProps({ params }) {
  const sitInfo = await getAllSiteInfo();
  const post = await getOneCase(params?.slug);
  //console.log(`Building slug: ${params?.slug}`);
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
};
export default CaseDetails;
