import { useState } from "react";
import { PortableText } from "@portabletext/react";

function Accordion_sm({ faqs }) {
  const [activeDefault, setActiveDefault] = useState(1000);
  //console.log(faqs);
  return (
    <>
      <div
        className="dlab-accordion accordion-sm"
        id="accordionFaq"
        //defaultActiveKey="0"
      >
        {faqs &&
          faqs.map((d, i) =>
            d.filtered === true ? (
              <div className="card" key={i}>
                <div
                  // eventKey={`${i}`}
                  className="card-header"
                  onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
                >
                  <h5 className="dlab-title">
                    <a
                      className={`${activeDefault === i ? "" : "collapsed"}`}
                      onClick={() =>
                        setActiveDefault(activeDefault === i ? -1 : i)
                      }
                    >
                      {d.question}
                    </a>
                  </h5>
                </div>
                <div
                  className={`${
                    activeDefault === i ? "collapsed show" : "collapsed"
                  }`}
                  //eventKey={`${i}`}
                  onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
                >
                  <div className="card-body">
                    {Array.isArray(d.answer) ? (
                      <PortableText value={d.answer} />
                    ) : (
                      <p>{d.answer} </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
      </div>
    </>
  );
}

export default Accordion_sm;
