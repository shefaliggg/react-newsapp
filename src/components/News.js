import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [];

  static defaultProps = {
    country: "IN",
    pagesize: 4,
    category: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults:0
    };

    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - Newsapp`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pagesize=${this.props.pagesize}&apiKey=8c58715fc4c44d45a522ced182ef9c71&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed = await data.json();

    this.setState({
      articles: parsed.articles,
      totalResults: parsed.totalResults
    });
  }

  fetchMoreData= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pagesize=${this.props.pagesize}&apiKey=8c58715fc4c44d45a522ced182ef9c71&page=${this.state.page+1}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsed = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsed.articles),
      page: this.state.page+1,
    });

  }
 

  render() {
    return (
      <>

        <h3 className="container my-3">
          Latest News -{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
        </h3>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles!=this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              if (element.urlToImage) {
                return (
                  <div className="col-md-3">
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      img={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              }
            })}
          </div>
          </div>
          </InfiniteScroll>
      </>
    );
  }
}

export default News;
