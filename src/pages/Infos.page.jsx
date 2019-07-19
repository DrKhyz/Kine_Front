import React from "react";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

import "./layout.scss";
import "./Infos.page.scss";

function Infos() {
  return (
    <>
      <div className="page">
        <TopBar
          title="Informations"
          leftButtonInfo={{ isVisible: false }}
          rightButtonInfo={{ isVisible: false }}
        />
        <section className="pageBodyInfos">
          <div className="firstBlock">
            <h2>Pourquoi ?</h2>
            <p>
              Ce calendrier va être utile pour identifier vos habitudes
              mictionelles et défécatoires afin d’optimiser la prise en charge.
            </p>
          </div>
          <div className="secondBlock">
            <h2>Comment ?</h2>
            <p>
              Pensez à noter chaque situation quand elle se produit dans la
              catégorie concernée pendant 3 jours et 3 nuits.
            </p>
          </div>
        </section>
      </div>
      <Navbar />
    </>
  );
}

export default Infos;
