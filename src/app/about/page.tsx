import Image from "next/image";
import Aboutimg from "../../../public/about.png";
import Button2 from "../../components/button2";
import '../../style/about.css';

export default function About() {
    return (
        <div id="about" className="about-section">
            <div className="about-header">
                <h3 className="about-title">About Me</h3>
                <div className="about-divider"></div>
            </div>
            <div className="about-content">
                <div className="about-image-container">
                    <Image src={Aboutimg} alt="About" className="about-image" />
                </div>
                <div className="about-text">
                    <p className="about-description">
                    &quot;Myself <b>Muhammad Sufyan</b>, a Pakistani Intermediate student living in Karachi. I have interest in the tech world and am currently enrolled in <b>GIAIC</b>, a great initiative taken by the governor of Sindh province. I am always eager to learn and contribute to my society and country. Thanks&quot;
                    </p>
                    <div className="about-skills-hobbies">
                        <div className="skills">
                            <h4 className="skills-title">Skills:</h4>
                            <div className="skills-list">
                                <Button2 item="Next.js" />
                                <Button2 item="Tailwind" />
                                <Button2 item="HTML" />
                                <Button2 item="CSS" />
                                <Button2 item="TypeScript" />
                            </div>
                        </div>
                        <div className="hobbies">
                            <h4 className="hobbies-title">Hobbies:</h4>
                            <div className="hobbies-list">
                                <Button2 item="Reading" />
                                <Button2 item="Learning" />
                                <Button2 item="Fitness" />
                                <Button2 item="Gaming" />
                                <Button2 item="Adventure" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
