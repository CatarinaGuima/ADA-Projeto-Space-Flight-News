import React, { useEffect, useState } from "react";
import "./styles/app.css";
import Navbar from "../src/components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Adicionado estado de carregamento

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v4/articles"
        );
        const newsData = response.data.results || response.data; 
        setNews(newsData);
      } catch (error) {
        console.error("Erro ao carregar as notícias:", error);
      } finally {
        setLoading(false); // Desativa o estado de carregamento
      }
    }

    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      <section id="articles">
        {loading ? (
          <div className="loader">
            <ColorRing
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
            />
          </div>
        ) : (
          news.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              thumbnail={article.image_url}
            />
          ))
        )}
      </section>
    </>
  );
}

export default App;
