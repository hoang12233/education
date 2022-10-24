import React from 'react'
import "./App.css"
import Header from "./components/common/heading/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Price from "./components/pricing/Price"
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'

import {
  BrowserRouter ,
  Switch,
  Route,
  useParams
} from "react-router-dom";

// import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />


        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/about" ><About/></Route>
          <Route path="/course" ><CourseHome/></Route>
          <Route path="/team"  ><Team/></Route>
          <Route path="/pricing"  ><Price/></Route>
          <Route path="/journal"  ><Blog/></Route>
          <Route path="/contact"  ><Contact/></Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App