import Portfolio2 from "../component/portfolio-2";
import Footer from "../layout/footer";

function Projects2() {
  return (
    <>
      {/* <!-- Projects --> */}
      <section
        className="content-inner pt-100px"
        style={{
          backgroundImage: "url(images/background/bg17.png)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="section-head style-3 text-center">
            <h2 className="title">Ontdek al onze cases</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <Portfolio2 />
        </div>
      </section>
    </>
  );
}

export default Projects2;
