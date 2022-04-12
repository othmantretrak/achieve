// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import Link from "next/link";
import { useEffect, useState } from "react";

function Portfolio3({ categories, cases }) {
  //console.log({ cases });

  const portfolio = cases.map((obj) => {
    if (!obj.categories) {
      return { category: ["all"] };
    }
    return {
      title: obj.title,
      slug: obj.slug,
      category: ["all", ...obj.categories?.map((c) => c.catslug)],
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
      {/* <div className="site-filters style-3 clearfix center m-b40">
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
      </div> */}

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
                        <Link href={`/cases/${item.slug}`}>
                          <a>{item.title}</a>
                        </Link>
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
