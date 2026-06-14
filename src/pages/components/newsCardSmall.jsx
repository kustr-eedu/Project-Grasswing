import { useState } from "react";
import "./newsCard.css";

function NewsCardSmall() {
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
    <div class="news-container">
      <div class="news-card">
        <img alt="Image from the news" />
        <a>Lorem ipsum dolor sit amet eiusmod tempor</a>
      </div>
      <section />
      <div class="news-card">
        <img alt="Image from the news" />
        <a>Lorem ipsum dolor sit amet eiusmod tempor</a>
      </div>
      <section />
      <div class="news-card">
        <img alt="Image from the news" />
        <a>Lorem ipsum dolor sit amet eiusmod tempor</a>
      </div>
    </div>
  );
}

export default NewsCardSmall;
