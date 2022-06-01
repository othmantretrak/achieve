import PricingT4 from "../component/pricingTable-4";
import Footer from "../layout/footer";
import { getAllCompanies, getAllPrice, getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import Header from "../layout/header";
import Cta from "../element/cta";
import Clients from "../element/clients";
import MetaTags from "../layout/MetaTags";

function PricingTable3({ sitInfo, prices, companies }) {
  return (
    <>
      <MetaTags title="Tarieven" keywords="Tarieven" desc="Achieve Tarieven" />
      <div className="page-content bg-gray pricing-tablee">
        {/* <!-- Banner  --> */}
        <Banner2 name="Tarieven" />
        {/* <!-- Banner End --> */}
        <PricingT4 prices={prices} />
        <Clients companies={companies} />
      </div>
      <Cta />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);

  const prices = await getAllPrice(preview);
  const companies = await getAllCompanies(preview);
  //console.log({ prices });
  return {
    props: { sitInfo, prices, companies },
    revalidate: 1,
  };
}

export default PricingTable3;
