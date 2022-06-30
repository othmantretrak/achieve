import Link from "next/link";
import Slider from "react-slick";
import TypewriterComponent from "typewriter-effect";
import PremaryBtn from "../../component/PremaryBtn";
import { problems } from "../../data/startProblemsData";

function StartProblem() {
  return (
    <section className="start-problem mb-100 ">
      <div className="container padding-top-100px ">
        <div className="mx-auto section-head style-3 text-center">
          <h2 className="title">Ervaar je één van de volgende problemen?</h2>
          <div className="dlab-separator  bg-primary style-2"></div>
        </div>
        <div className="row">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="col-sm-12 col-md-6 problem-text text-center"
            >
              <div className="dlab-separator  bg-primary"></div>
              <p className="h5 my-4">{problem}</p>
            </div>
          ))}
        </div>
        <div className="justify-content-center pt-5 row text-center">
          <PremaryBtn title="Gratis intake" />
        </div>
      </div>
    </section>
  );
}

export default StartProblem;
