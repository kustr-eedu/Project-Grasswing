import { useState } from "react";
import GrasswingFooter from "./components/footer";
import WebsiteSelector from "./components/siteSelector";
import "./stylesheet.css";

function Music() {
  return (
    <div class="main-container">
      <WebsiteSelector />
      <section />
      <GrasswingFooter />
    </div>
  );
}

export default Music;
