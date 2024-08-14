import React, { useEffect, useState } from 'react';
import Header from '../Components/Header'; // Import the Header component
import '../Components/Home.css'; // Ensure the path is correct
import '../Components/LiveScores.css';
import LiveScores from './LiveScores';
import About from './About';
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ebe117b4c32044d6911c04bbd995d8a2';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    const intervalId = setInterval(fetchNews, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div>
    <Header />
    <div className="container">
      {/* Include the Header component */}
      <div className="date-info">
        <span>{formattedDate}</span>
      </div>
      <main>
        <LiveScores/>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <a href={article.url} key={index} className="art1">
              <section className="news-section">
                <article>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <p>{new Date(article.publishedAt).toLocaleString()}</p>
                </article>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="main-image"
                    loading="lazy"
                  />
                )}
              </section>
            </a>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </main>
    </div>
    </div>
  );
};

export default Home;
