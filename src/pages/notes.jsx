import React, { useState } from "react";
import GrasswingFooter from "./components/footer";
import WebsiteSelector from "./components/siteSelector";
import NoteSystem from "./components/noteSystem";
import "./stylesheet.css";

function Notes() {
  return (
    <div class="main-container">
      <WebsiteSelector />
      <section />
      <NoteSystem />
      <section />
      <GrasswingFooter />
    </div>
  );
}

export default Notes;
