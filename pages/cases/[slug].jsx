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

  const getIdYoutube = () => {
    let regex =
      /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(post[0].youtube)[3];
  };

  console.log({ youtubeId: getIdYoutube(post[0].youtube) });
  return (
    <>
      <div className="page-content bg-white case-details">
        {/* <!-- Banner  --> */}
        <Banner2 name={post[0].title} />
        {/* <!-- Banner End --> */}

        {/* <!-- Services Details --> */}
        <section
          className="content-inner-2 case-details"
          style={{ backgroundImage: "url(../images/background/bg1.png)" }}
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
                  />
                </div>
                <div className="dlab-content">
                  {/* <div className="m-b40">
                    <PostBody content={post[0]?.body} />
                  </div> */}
                  <div className="row">
                    <div className="col-lg-6">
                      <PostBody content={post[0]?.body} />
                    </div>
                    {/* <div className="col-lg-6">
                      <h3>How You Start Web Development ?</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley.
                      </p>
                      <ul className="list-arrow primary m-b30">
                        <li>
                          Lorem Ipsum is simply dummy text of the printing.
                        </li>
                        <li>
                          Lorem Ipsum has been the industry standard dummy text
                          ever.
                        </li>
                        <li>
                          when an unknown printer took a galley of type and
                          scrambled.
                        </li>
                        <li>
                          It has survived not only five centuries, but also the
                          leap.
                        </li>
                        <li>
                          Recently with desktop publishing software like Aldus
                          PageMaker.
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing
                          industry.
                        </li>
                      </ul>
                    </div> */}
                    <div className="col-lg-6">
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
                        {typeof window !== "undefined" && (
                          <ModalVideo
                            channel="youtube"
                            autoplay
                            isOpen={isOpen}
                            videoId={getIdYoutube()}
                            onClose={() => setOpen(false)}
                          />
                        )}
                      </div>
                    </div>
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
