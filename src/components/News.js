import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
     // eslint-disable-next-line
  }, []);
   

  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // }

  // const handleNextClick = async () => { 
  //   setPage(page+1)
  //   updateNews()
  // }
  const fetchMoreData =  () => {
    setPage(page + 1);
    setTimeout(async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page + 1}&pagesize=${props.pagesize}`;

      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults);
      let per = ((articles.length+parseData.articles.length) * 100) / totalResults; 
      props.setProgress(per);
      console.log(totalResults);
    
    }, 300);
    
  };

  return (
    <>
      <h1 className="text-center my-3">
        NewsMonkey-Top {capitalizeFirstLetter(props.category)}
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        height={0}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem title={element.title ? element.title.slice(0, 88) : ""}
                    description={element.description ? element.description.slice(0, 80) + " ..." : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between"> 
          <button  disabled={this.state.page <= 1} type="button"  className="btn btn-dark "  onClick={handlePrevClick}>
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pagesize)} type="button" className="btn btn-dark" onClick={handleNextClick}>
            Next &rarr;
          </button>
        </div> */}
    </>
  );
}

News.defaultProps = {
  country: "in",
  // apikey : process.env.REACT_APP_NEWS_API_DEV,
  // apikey: process.env.REACT_APP_NEWS_API_LUCY,
  // apikey : process.env.REACT_APP_NEWS_API_PRITI,
  apikey : process.env.REACT_APP_NEWS_API_RAJESH,
  // apikey : process.env.REACT_APP_NEWS_API_SMITAL,
  pagesize: 6,
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
};
export default News;
