import { useContext } from "react";
import "./styles/sidebar.css";
import { UserContext } from "./service/ContextApi";

const Sidebar=()=>{
    const {sideBar,setSideBar}=useContext(UserContext);
    return (
        <div className={`sidebar-container ${sideBar?"openSideBar":"closeSideBar"}`} id="sidebar-container">
        <section className="nav-section">
        <svg className="close-btn" onClick={(e)=>setSideBar(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>
        <h3 style={{color:"red"}}>Menu</h3>
        <ul>
            <li>Work</li>
            <li>Services•</li>
            <li>Clients</li>
            <li>About•</li>
            <li>Knowledge</li>
        </ul>
        </section>
        <section className="contact-section">
            <a href="/" style={{fontSize:"1rem",color:"blue"}}>info@leo9studio.com</a>
            <h3 style={{color:"grey"}}>IND:</h3>
            <span>+91 7208149788</span>
            <span>+91 9152727927</span>
            <h3 style={{color:"grey"}}>USA:</h3>
            <span>+1(802)347-3690</span>
        </section>
        <section className="btn-section">
        <button className="cont-btn">Contact</button>
        </section>
        </div>
    )
}
export default Sidebar;
