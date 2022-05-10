import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={4} country='IN' category='general' />}/> 
            <Route exact path="/business" element={<News key="business" pagesize={4} country='IN' category='business' />}/> 
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={4} country='IN' category='entertainment' />}/>        
            <Route exact path="/health" element={<News key="health" pagesize={4} country='IN' category='health' />}/>
            <Route exact path="/science" element={<News key="science" pagesize={4} country='IN' category='science' />}/>
            <Route exact path="/sports" element={<News key="sports" pagesize={4} country='IN' category='sports' />}/>
            <Route exact path="/technology" element={<News key="technology" pagesize={4} country='IN' category='technology' />}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

