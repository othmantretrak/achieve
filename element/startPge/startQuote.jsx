import Link from "next/link";
import Slider from "react-slick";
import TypewriterComponent from "typewriter-effect";
import PremaryBtn from "../../component/PremaryBtn";
import WiveSvg from "../svgs/WiveSvg";

function StartQuote() {
  return (
    <section
      className="bg-g my-5 py-5 start-quote"
      style={{
        backgroundImage: "var(--gradient)",
        textAlign: "center",
      }}
    >
      <div className="container py-5 position-relative">
        <p className="h3 text-light">
          Wij geloven dat we met online marketing jouw onderneming naar een
          hoger niveau kunnen tillen.
        </p>
      </div>
    </section>
  );
}

export default StartQuote;
