// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import { useEffect, useState } from "react";

function Portfolio3({ categories, cases }) {
  //console.log({ cases });

  const portfolio = cases.map((obj) => {
    return {
      title: obj.title,
      category: ["all", ...obj.categories.map((c) => c.catslug)],
      img: (
        <Image
          src={imageBuilder(obj.coverImage).width(370).height(370).url()}
          layout="responsive"
          width={370}
          height={370}
          alt="case"
        />
      ),
    };
  });
  //console.log({ test: test[0].category });
  /* const portfolio = [
    {
      title: "Software Landing Page Design",
      category: ["all", "search-engine-advertising", "branding"],
      img: (
        <Image
          src="/images/projects/project-1/pic1.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "branding"],
      img: (
        <Image
          src="/images/projects/project-1/pic2.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      img: (
        <Image
          src="/images/projects/project-1/pic3.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/projects/project-1/pic4.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "seo"],
      img: (
        <Image
          src="/images/projects/project-1/pic5.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "branding"],
      img: (
        <Image
          src="/images/projects/project-1/pic6.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ]; */

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

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

          {/* <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={filter === "web_development"}
              onClick={() => setFilter("web_development")}
            >
              Web Development
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a
              active={filter === "mobile_app"}
              onClick={() => setFilter("mobile_app")}
            >
              E-mail marketing
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={filter === "seo"} onClick={() => setFilter("seo")}>
              Content creation
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a
              active={filter === "web_design"}
              onClick={() => setFilter("web_design")}
            >
              Advertising
            </a>
          </li> */}
        </ul>
      </div>

      <div className="clearfix">
        <ul id="masonry" className="row" data-column-width="3">
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
                      {/* <p className="post-author">
                        By <a href="#">{item.author}</a>
                      </p> */}
                    </div>
                  </div>
                </li>
              </>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default Portfolio3;
