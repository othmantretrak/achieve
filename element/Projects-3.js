import Portfolio3 from "../component/portfolio-3";

function Projects3({ categories, cases }) {
  return (
    <>
      {/* <!-- Projects --> */}
      <section className="content-inner bg-gray">
        <div className="container">
          <div className="section-head style-3 text-center">
            <h2 className="title">Laatst toegevoegde cases</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <Portfolio3 categories={categories} cases={cases} />
        </div>
      </section>
    </>
  );
}

export default Projects3;
