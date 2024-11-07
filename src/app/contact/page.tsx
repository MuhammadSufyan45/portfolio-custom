import '../../style/contact.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div id="contact" className="contact-section">
            <h3 className="contact-title">Contact Me</h3>
            <div className="contact-divider"></div>

            <div className='form-social'>
            <form className="contact-form">
                <div className="contact-inputs">
                    <input type="text" placeholder="Name" className="contact-input" required />
                    <input type="text" placeholder="Email" className="contact-input" required />
                </div>

                <input type="text" placeholder="Subject" className="contact-input" required />

                <textarea rows={4} placeholder="Message" className="contact-textarea" required></textarea>

                <div>
                    <button className="submit-button">Submit</button>
                </div>
            </form>

            {/* Social Icons Section */} {/* phone: "sm:flex flex-row gap-4 hidden" */}  {/* insta: "flex flex-row gap-4 sm:hidden" */}
                                           {/* Linkedin: "flex flex-row gap-4"*/}
  <div className="social">
    <Link href="/" target="blank" className="phone">  
    <i className="fas fa-phone"></i>
    <span className="text-white hidden text-xl sm:block ">000-333-666</span>
    </Link>
    <Link href="https://instagram.com" target="blank" className="insta">
    <i className="fab fa-instagram"></i>
    <span className="text-white hidden text-xl sm:block"></span>
    </Link>
    <Link href="https://pk.linkedin.com" target="blank" className="linkedin">
    <i className="fab fa-linkedin"></i>
    <span className="text-white hidden text-xl sm:block ">M.Sufyan/linkedin</span>
    </Link>
    <Link href="https://www.facebook.com" target="blank" className="facebook">
    <i className="fab fa-facebook"></i>
    <span className="text-white hidden text-xl sm:block ">M.Sufyan/facebook</span>
    </Link>
    <Link href="https://www.x.com" target="blank" className="x">
    <i className="fab fa-twitter"></i>
    <span className="text-white hidden text-xl sm:block ">M.Sufyan/twitter</span>
    </Link>
  </div>
            </div>
        </div>
    );
}
