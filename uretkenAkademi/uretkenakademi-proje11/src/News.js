import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-03-03&sortBy=publishedAt&apiKey=32a3c6d4d6544594a685f7507719369e"
      );
      const data = await res.json();
      setNews(data["articles"]);
    } catch (e) {
      alert("Api error");
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <h3 className="text-center display-5 ">News</h3>
      <hr/>
      {news.map((data) => (
        <Card
          style={{
            width: "24rem",
          }}
          className="offset-1 mb-5"
          key={data.id}
        >
          <img alt="Sample" src={data.urlToImage} />
          <CardBody>
            <CardTitle tag="h5">{data.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {data.author}
            </CardSubtitle>
            <CardText className="text-card">{data.description}</CardText>
            <Button>Daha fazla</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default News;
