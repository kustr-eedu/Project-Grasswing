import { useState } from "react";
import NewsCard from "./components/newsCard";
import GrasswingFooter from "./components/footer";
import WebsiteSelector from "./components/siteSelector";
import "./stylesheet.css";

function News() {
  const API_KEY = "pub_e6648db301804d4c8f237b51e690290b";
  const [newsData, setNewsData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?&apikey=${API_KEY}`,
    );
    const jsonData = response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  return (
    <div class="main-container">
      <WebsiteSelector />
      <section />
      <NewsCard />
      <button onClick={getData}>
        <text>Hello</text>
      </button>
      <section />
      <GrasswingFooter />
    </div>
  );
}

export default News;
