import React from "react";
import Communication from "./iconCompenents/Communication";
import Passion from "./iconCompenents/Passion";
import Professionaliteit from "./iconCompenents/Professionaliteit";
import Transparantie from "./iconCompenents/Transparantie";

function OurPromises() {
  return (
    <div className="container our-promises">
      <div>
        <h2 className="title">Onze beloftes aan jou</h2>

        <div className="dlab-separator style-2 bg-primary"></div>
      </div>
      <h4>De kernwaarden van Achieve op een rijtje.</h4>
      <div className="row">
        <div className="col-md">
          <Communication />
          <h4>Communicatie</h4>
          <p>
            Door duidelijke communicatie tussen beide partijen zullen we
            optimaal samen werken, groeien en vooruit gaan.
          </p>
        </div>
        <div className="col-md">
          <Transparantie />
          <h4>Transparantie</h4>
          <p>
            Te allen tijde zullen we onderbouwd advies geven over de resultaten.
            In overleg worden er keuzes gemaakt en toegepast.
          </p>
        </div>
        <div className="col-md">
          <Professionaliteit />
          <h4>Professionaliteit</h4>
          <p>
            De adviezen en keuzes zijn altijd met zuivere intentie, afgewogen
            door professionals met ervaring in het werkveld en met oog op
            externe invloeden.
          </p>
        </div>
        <div className="col-md">
          <Passion />
          <h4>Passie</h4>
          <p>
            Wanneer je doet waar je van houd, komt het beste naar boven. Vertel
            jij over jouw passie, versterken wij die met die van ons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPromises;
