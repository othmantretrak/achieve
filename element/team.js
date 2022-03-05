import TeamSlider from "./../component/teamSlider";

function Team({ team }) {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
            <h2 className="title">Our Best Expertise</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <TeamSlider team={team} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
