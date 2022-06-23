import Link from "next/link";
import Slider from "react-slick";
import TypewriterComponent from "typewriter-effect";
import PremaryBtn from "../../component/PremaryBtn";
import WiveSvg from "../svgs/WiveSvg";

function StartPersonal() {
  return (
    <section className="bg-light personal-quote mb-100">
      <div className="container py-5 ">
        <div className="mx-auto section-head style-3 text-center">
          <h2 className="title">
            Persoonlijke aandacht voor jouw onderneming en doelen
          </h2>
          <div className="dlab-separator  bg-primary style-2"></div>
        </div>
        <p className="h5 text-center">
          Wij begrijpen als geen ander dat iedereen moet focussen op zijn passie
          en waar hij of zij goed in is. Juist daarom zijn wij dé partner voor
          snelle, persoonlijke, transparante en eerlijke marketing.
        </p>
      </div>
    </section>
  );
}

export default StartPersonal;
