import Link from "next/link";
import Slider from "react-slick";
import TypewriterComponent from "typewriter-effect";
import PremaryBtn from "../../component/PremaryBtn";
import Branding from "../svgs/branding";
import Experimental from "../svgs/experimental";
import Stratigie from "../svgs/stratigie";

function StartSteps() {
  return (
    <section className="start-steps mb-100">
      <div className="container padding-top-100px ">
        <div className="mx-auto section-head style-3 text-center">
          <h2 className="title">In 3 stappen lossen we al je problemen op!</h2>
          <div className="dlab-separator  bg-primary style-2"></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="problem-text text-center">
              <Branding />
              <h5>1. Branding</h5>
              <p className=" my-4">
                Het huisstijl handboek is de handleiding voor jouw merk. Het
                zorgt ervoor dat iedereen precies weet wat ze wel (en juist
                niet) moeten doen om ervoor te zorgen dat je een herkenbaar en
                waardevol merk kunt bouwen.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="problem-text text-center">
              <Stratigie />
              <h5>2. Strategie & Creatie</h5>
              <p className=" my-4">
                De strategie bepaalt mede wat het doel is van je content, welke
                content je wanneer wilt creëren, via welke online kanalen je de
                content wilt gaan distribueren en wie de doelgroep is voor de
                content.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="problem-text text-center">
              <Experimental />
              <h5>3. Experimenteren En Evalueren</h5>
              <p className=" my-4">
                Als de strategie is bepaald gaan we deze opzetten en uitvoeren,
                en wordt te allen tijde gemonitord en na afloop geëvalueerd. Aan
                de hand van de resultaten worden de vervolgstappen bepaald en
                herhalen dit hele proces.
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

export default StartSteps;
