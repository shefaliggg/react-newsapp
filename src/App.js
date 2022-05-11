import './App.css';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component {

  apiKey = process.env.REACT_APP_API;
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({
      progress:progress
    });
  } 

  render() {
    return ( 
      <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height= {3}
      />
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pagesize={4} country='IN' category='general' />}/> 
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pagesize={4} country='IN' category='business' />}/> 
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pagesize={4} country='IN' category='entertainment' />}/>        
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pagesize={4} country='IN' category='health' />}/>
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pagesize={4} country='IN' category='science' />}/>
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pagesize={4} country='IN' category='sports' />}/>
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pagesize={4} country='IN' category='technology' />}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

