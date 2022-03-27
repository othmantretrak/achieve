// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import { useEffect, useState } from "react";
import Accordion_sm from "../element/accordion_sm";

function Faq3({ categories, faqs }) {
  console.log({ faqs });

  const portfolio = faqs.map((obj) => {
    const cats = obj.categories
      ? [...obj.categories?.map((c) => c.catslug)]
      : [];
    console.log({ cats });
    return {
      question: obj.question,
      answer: obj.answer,
      category: ["all", ...cats],
    };
  });

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  console.log({ filter });
  console.log({ projects });
  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-3 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a onClick={() => setFilter("all")}>All</a>
          </li>
          {categories &&
            categories.map((c) => (
              <li
                key={c._id}
                className={`btn ${filter === c.slug ? "active" : ""}`}
              >
                <a
                  //$active={filter === c.slug}
                  onClick={() => setFilter(c.slug)}
                >
                  {c.title}
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div className="clearfix">
        <Accordion_sm faqs={projects} />
        {/* <ul id="masonry" className="row" data-column-width="3">
          {projects.map((item) =>
            item.filtered === true ? (
              <>
                <li
                  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.1s"
                >
                  <div className="dlab-box dlab-overlay-box style-3 m-b30">
                    <div className="dlab-media dlab-img-overlay1">
                      {item.img}
                    </div>
                    <div className="dlab-info">
                      <h5 className="title">
                        <a href="#">{item.title}</a>
                      </h5>
                      
                    </div>
                  </div>
                </li>
              </>
            ) : (
              ""
            )
          )}
        </ul> */}
      </div>
    </>
  );
}

export default Faq3;
