import hero_img from "../assets/Main.png";
import "./styles/hero.css";
import {images} from "../utils/images";

const Hero=()=>{
    return (
        <div className="hero-container">
            <div className="hero-div">
            <section>
                <img src={hero_img} width={"70%"} alt="img"></img>
            </section>
               <section>
               <h1>Design</h1>
               <h1>Transform</h1>
               <h1>Accelerate</h1>
               <span>Redefining user experiences through Behavioural Science & AI</span>
               </section>
            </div>
            <div className="div2">
                <section>Your trusted UI UX design agency.</section>
                <div className="slide-div">
                <section>
                {
                    images.map(each=>{
                        return(
                            <img src={each} width={"60px"}  style={{objectFit:"cover"}} alt="image"></img>
                        )
                    })
                }
                </section>
                </div>
            </div>
        </div>
    )
}
export default Hero;