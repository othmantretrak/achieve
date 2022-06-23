import Link from "next/link";
import Slider from "react-slick";
import TypewriterComponent from "typewriter-effect";
import PremaryBtn from "../../component/PremaryBtn";

function StartProblem() {
  return (
    <section className="start-problem mb-100 ">
      <div className="container padding-top-100px ">
        <div className="mx-auto section-head style-3 text-center">
          <h2 className="title">Ervaar je één van de volgende problemen?</h2>
          <div className="dlab-separator  bg-primary style-2"></div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="problem-text text-center">
              <div className="dlab-separator  bg-primary"></div>
              <p className="h5 my-4">
                Je wilt graag groeien met je business maar weet niet hoe
                marketing daar aan bij kan dragen.
              </p>
            </div>
            <div className="problem-text text-center">
              <div className="dlab-separator  bg-primary"></div>
              <p className="h5 my-4">
                Je wilt graag groeien met je business maar weet niet hoe
                marketing daar aan bij kan dragen.
              </p>
            </div>
            <div className="problem-text text-center">
              <div className="dlab-separator  bg-primary"></div>
              <p className="h5 my-4">
                Je wilt graag groeien met je business maar weet niet hoe
                marketing daar aan bij kan dragen.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="problem-text text-center">
              <div className="dlab-separator  bg-primary"></div>
              <p className="h5 my-4">
                Je wilt graag groeien met je business maar weet niet hoe
                marketing daar aan bij kan dragen.
              </p>
            </div>
            <div className="problem-text text-center">
              <div className="dlab-separator  bg-primary"></div>
              <p className="h5 my-4">
                Je wilt graag groeien met je business maar weet niet hoe
                marketing daar aan bij kan dragen.
              </p>
            </div>
            <div className="problem-text text-center">
              <div className="dlab-separator  bg-primary"></div>
              <p className="h5 my-4">
                Je wilt graag groeien met je business maar weet niet hoe
                marketing daar aan bij kan dragen.
              </p>
            </div>
          </div>
        </div>
        <div className="justify-content-center pt-5 row text-center">
          <PremaryBtn title="Gratis intake" />
        </div>
      </div>
    </section>
  );
}

export default StartProblem;
