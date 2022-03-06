import { imageBuilder } from "../lib/sanity";
import TeamSlider from "./../component/teamSlider";

function TeamFinal({ team }) {
  return (
    <>
      <section className="content-inner pt-100px">
        <div className="container">
          <div className="section-head style-1 text-center">
            {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6> */}
            <div>
              <h2 className="title">Ontmoet het team</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <p>
              Maak kennis met ons geweldige team! Dat bestaat uit getalenteerde
              specialisten. Allemaal knappe koppen met veel online
              marketingkennis.
            </p>
          </div>
          <div className="row">
            {team &&
              team.map((t) => (
                <div
                  key={t._id}
                  className="col-lg-4 col-md-6 card d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    style={{ width: "130px" }}
                    className="align-items-center border d-flex dlab-media justify-content-center rounded-circle"
                  >
                    <img
                      src={imageBuilder(t.coverImage)
                        .width(337)
                        .height(337)
                        .url()}
                      alt={t.name}
                    />
                  </div>
                  <div className="team-info d-flex flex-column justify-content-center align-items-center">
                    <h5 className="dlab-name">
                      <a>{t.name}</a>
                    </h5>
                    <span className="dlab-position">{t.profession}</span>
                    <span>
                      <a href={t.email} className="fa fa-envelope"></a>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamFinal;
