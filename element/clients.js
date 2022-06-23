import ClientSlider from "./../component/clientSlider";

function Clients({ companies }) {
  return (
    <>
      <div className="content-inner-2 client pt-100px">
        <div className="container">
          <div className="section-head style-3 text-center">
            <h2 className="title">Deze bedrijven gingen je voor</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
            <ClientSlider companies={companies} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
