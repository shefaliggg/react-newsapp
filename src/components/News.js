import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  articles = []

  handlePrev = async () =>{

    let url = `https://newsapi.org/v2/top-headlines?country=IN&pagesize=4&apiKey=8c58715fc4c44d45a522ced182ef9c71&page=${this.state.page-1}`;
    
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);

    this.setState({
      articles: parsed.articles,
      page: this.state.page-1
    });
      

  }

  handleNext = async () =>{

    let url = `https://newsapi.org/v2/top-headlines?country=IN&pagesize=4&apiKey=8c58715fc4c44d45a522ced182ef9c71&page=${this.state.page+1}`;
    
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);

    this.setState({
      articles: parsed.articles,
      page: this.state.page+1
    });
      
  }

  constructor(){
    super();
    this.state = {
      articles:this.articles,
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=IN&pagesize=4&apiKey=8c58715fc4c44d45a522ced182ef9c71&page=${this.state.page}`;
    
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);

    this.setState({
      articles: parsed.articles
    });
}

  render() {

    return (
        <div className='container my-3'>
        <h3 className='my-3'>Latest News</h3>

          <div className="row">
          {this.state.articles.map((element)=>{
            if(element.urlToImage){
              return <div className="col-md-3">
                        <Newsitem title={element.title} description={element.description} img={element.urlToImage} url={element.url} />
                    </div>
            }
            
          }
          )}
          </div>

        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>


        </div>

        
      
    )
  }
}

export default News