import React from "react";
import DataManager from "../components/DataManager";
import FooterBar from "../components/FooterBar";

export default function DataManagerEmbed({ webId }) {
  return (
    <>
      <DataManager webId={webId} />
      <div className="footer-spacer" />
      <FooterBar showLogos={false} />
    </>
  );
}
