import Link from "next/link";
import PremaryBtn from "../component/PremaryBtn";

function Cta() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(images/background/bg5.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row action-box style-1 align-items-center">
            <div
              className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                style={{ marginBottom: "0px" }}
                className="section-head style-1"
              >
                <h2 className="title">
                  Benieuwd wat wij voor jou onderneming kunnen betekenen?
                </h2>
              </div>
            </div>
            <PremaryBtn title="Gratis intake" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
