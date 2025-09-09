import "./styles/navbar.css";
import icon from "../assets/icon.png";
import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { UserContext } from "./service/ContextApi";
import Services from "./services";
import services from "../utils/services";
import about from "../utils/about";

const Navbar=()=>{
    const {sideBar,setSideBar}=useContext(UserContext);
    const {ser,setServices}=useContext(UserContext);
    const {abt,setAbout}=useContext(UserContext);
    function openSideBar(e){
        setSideBar(prev=>!prev);
    }
    return (
        <div className="navbar-container">
            <section className="sec1">
                <img src={icon} width={"60px"} style={{zIndex:99}} alt="logo"></img>
                <p>Leo9</p>
            </section>
            <div  className="sec2">
            <section className="ul-section">
                <ul className="ul">
                    <li>Work</li>
                    <li onMouseEnter={(e)=>setServices(true)}  onMouseLeave={(e)=>setServices(false)}>Services•</li>
                    <li>Client</li>
                    <li onMouseOver={(e)=>setAbout(true)} onMouseLeave={(e)=>setAbout(false)}>About•</li>
                    <li>Knowledge</li>
                </ul>
            </section>
            <section className="btn-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="44" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1"><path stroke-width="1.5" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.996 3h.008m-.008 18h.01m6.353-15.364h.009M5.634 18.364h.01m-.01-12.728h.01m12.714 12.729h.01M20.99 12H21M3 12h.009"/></g></svg>
                <button className="contact-btn">Contact</button>
                <section className="menu-bar" onClick={(e)=>openSideBar(e)}><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg></section>
            </section>
            </div>
            {sideBar && <Sidebar/>}
            {ser && <Services fun={setServices}  items={services}/>}
            {abt && <Services items={about} fun={setAbout}/>}
        </div>
    )
}
export default Navbar;