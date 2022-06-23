import React from "react";
import { imageBuilder } from "../lib/sanity";
import Communication from "./iconCompenents/Communication";
import Passion from "./iconCompenents/Passion";
import Professionaliteit from "./iconCompenents/Professionaliteit";
import Transparantie from "./iconCompenents/Transparantie";

function OurPromises({ overOns }) {
  //console.log({ overOns: overOns[0].introduction });
  return (
    <div className="container our-promises">
      <div className="section-head style-3 text-center">
        <h2 className="title">Onze beloftes aan jou</h2>
        <div className="dlab-separator style-2 bg-primary"></div>
      </div>

      {/*   <h4>De kernwaarden van Achieve op een rijtje.</h4> */}
      <div className="row">
        <div className="col-md">
          <img
            src={imageBuilder(
              overOns[0]?.communicatie?.communicatieIcon
            )?.url()}
            alt=""
          />
          <h4>Communicatie</h4>
          <p>{overOns[0]?.communicatie?.text}</p>
        </div>
        <div className="col-md">
          <img
            src={imageBuilder(
              overOns[0]?.transparantie?.transparantieIcon
            )?.url()}
            alt=""
          />
          <h4>Transparantie</h4>
          <p>{overOns[0]?.transparantie?.text}</p>
        </div>
        <div className="col-md">
          <img
            src={imageBuilder(
              overOns[0]?.professionaliteit?.professionaliteitIcon
            )?.url()}
            alt=""
          />
          <h4>Professionaliteit</h4>
          <p>{overOns[0]?.professionaliteit?.text}</p>
        </div>
        <div className="col-md">
          <img
            src={imageBuilder(overOns[0]?.passie?.passieIcon)?.url()}
            alt=""
          />
          <h4>Passie</h4>
          <p>{overOns[0]?.passie?.text}</p>
        </div>
      </div>
    </div>
  );
}

export default OurPromises;
