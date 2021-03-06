import Footer from "../layout/footer";
import Link from "next/link";
import { getAllSiteInfo } from "../lib/api";
import Header from "../layout/header";
import Banner2 from "../element/banner2";

function Error404({ sitInfo }) {
  return (
    <>
      <div className="page-content bg-white">
        <Banner2 name="404" />

        {/* <!-- Error Page --> */}
        <div
          className="section-full"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png)",
          }}
        >
          <div className="container">
            <div className="error-page text-center">
              <div className="dlab_error">404</div>
              <h2 className="error-head">
                We are sorry. But the page you are looking for cannot be found.
              </h2>
              <Link href="/">
                <a className="btn btn-primary radius-no">
                  <span className="p-lr15">Back to Homepage</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  //console.log({ cases });
  return {
    props: { sitInfo },
    revalidate: 1,
  };
}
export default Error404;
