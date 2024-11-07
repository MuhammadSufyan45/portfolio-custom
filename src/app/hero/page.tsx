import Image from "next/image";
import Hero2 from "../../../public/hero2.png";
import "../../style/hero.css";
import Button1 from "../../components/button1";
import Button from "../../components/button"

export default function Hero() {
    return (
        <div id="home" className="hero-container">
            <div className="image-container">
                <Image src={Hero2} alt="Pic" className="hero-image" />
            </div>
            <div className="text-container">
                <div className="greeting">
                    <h2 className="hero-title">Hi! I Am Muhammad Sufyan</h2>
                    <h3 className="hero-subtitle">Front End Developer</h3>
                </div>
                <div className="button-container">
                    <Button1 item="Contact Me"/>
                    <Button item="Learn More"/>
                </div>
            </div>
        </div>
    );
}
