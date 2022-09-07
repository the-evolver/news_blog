import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updateNews = async () => {
        setLoading(true);
        props.setProgress(10);
        //let url = `https://newsapi.org/v2/top-headlines?country=In&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`
        props.setProgress(30);
        let data = await fetch(url);
        props.setProgress(50);
        let parseData = await data.json();
        props.setProgress(65);
        setArticles(articles.concat(parseData.articles));
        setLoading(false);
        setTotalResults(parseData.totalResults);
        props.setProgress(100);            
    }
    useEffect (()=>{
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - NewsGorilla`
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const fetchMoreData = async() => {
        props.setProgress(10);
        //let url = `https://newsapi.org/v2/top-headlines?country=In&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`
        setPage(page + 1);
        props.setProgress(30);
        let data = await fetch(url);
        console.log(data);
        props.setProgress(50);
        let parseData = await data.json();
        props.setProgress(65);
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
        props.setProgress(100);  
    };
    
        //console.log("render");
        return (
            <>
                <h1 className="text-center" style={{ marginTop: "95px", marginBottom: "20px" }}> {capitalizeFirstLetter(props.category) === "General" ? "News" : capitalizeFirstLetter(props.category)} - Top Headlines</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData} 
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
            <div className="container">
                <div className="row">
                    {articles.map((elem) => {
                        return (
                            <div key={elem.url} className="col-md-4">
                                <NewsItem
                                    title={(elem.title) ? elem.title.slice(0, 73) : ""}
                                    description={(elem.description) ? elem.description.slice(0, 88) : ""}
                                    imageUrl={elem.urlToImage}
                                    newsUrl={elem.url}
                                    author={elem.author}
                                    date={elem.publishedAt}
                                    source={elem.source.name}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
                </InfiniteScroll>
            </>
        );
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    cnt: PropTypes.number
}

export default News