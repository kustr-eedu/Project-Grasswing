import React, { useState } from "react";

function NewsCard() {
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
    <div>
      <div>
        <img placeholder="Image from the news" />
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </a>
      </div>
      <div>
        <img placeholder="Image from the news" />
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </a>
      </div>
      <div>
        <img placeholder="Image from the news" />
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </a>
      </div>
      <div>
        <img placeholder="Image from the news" />
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </a>
      </div>
      <div>
        <img placeholder="Image from the news" />
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </a>
      </div>
      <div>
        <img placeholder="Image from the news" />
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </a>
      </div>
      <div>
        <img placeholder="Image from the news" />
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
