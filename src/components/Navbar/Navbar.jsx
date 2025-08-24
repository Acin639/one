import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search from "../../assets/search_icon.svg"
import play_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'
import search from '../../pages/search/search.jsx'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  const navRef = useRef(); 
  const navigate = useNavigate();

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add("nav-dark")
      } else {
        navRef.current.classList.remove("nav-dark")
      }
    })
  }, [])

  const scrollToSection = (id) => {
    const offset = 80; // height of your fixed navbar in pixels
    const element = document.getElementById(id);
  
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
    

  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
        <ul>
          <li onClick={() => scrollToSection("popular")}>Popular on Netflix</li>
        <li onClick={() => scrollToSection("blockbusters")}>Blockbuster Movies</li>
        <li onClick={() => scrollToSection("only-on-netflix")}>Only on Netflix</li>
        <li onClick={() => scrollToSection("upcomings")}>Upcomings</li>
        <li onClick={() => scrollToSection("top-picks")}>Top Picks</li>
        <li onClick={() => scrollToSection("footer")}>Contact Us</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} onclick={()=> navigate("/search")} alt="search" className='icons' />
        <img src={play_icon} alt="play_icon" className='icons'/>
        <div className="navbar-profile">
        <img src={profile_img} alt="profile_img" className='profile'/>
        <img src={caret_icon} alt="caret_icon" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign out</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
