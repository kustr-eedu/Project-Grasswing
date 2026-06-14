import React, { useState } from "react";
import "./siteSelector.css";

function WebsiteSelector() {
  return (
    <div class="site-selector">
      <button class="bar-button">
        <a href="/">Main</a>
      </button>
      <button class="bar-button">
        <a href="/news">News</a>
      </button>
      <button class="bar-button">
        <a href="/notes">Notes</a>
      </button>
      <button class="bar-button">
        <a href="/music">Music</a>
      </button>
    </div>
  );
}

export default WebsiteSelector;
