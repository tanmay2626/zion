import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './contact.scss';

function Contact(){
    return (
        <>
            <Navbar active={'contact'} />
            <section className="contact-container">
                <h2>Contact Us</h2>
                <div className="contact-wrapper">
                    <div className="left">
                        <div className='set-line'>
                            <img src="./images/Mail.png" alt="" />
                            <h3>Mail</h3>
                        </div>
                        <a href="mailto:info@zion.dypit.edu">info@zion.dypit.edu</a>
                    </div>
                    <div className="mid">
                        <div className="set-line">
                            <img src="./images/Mail.png" alt="" />
                            <h3>Whatsapp</h3>
                        </div>
                        <a href="http://wa.me/+9195959XXXXX">http://wa.me/+9195959XXXXX</a>
                    </div>
                    <div className="right">
                        <div className="set-line">
                        <img src="./images/Phone.png" alt="" />
                            <h3>Phone</h3>
                        </div>
                        <h4>Name : </h4>
                        <p>+91 6969696</p>
                        <h4>Name : </h4>
                        <p>+91 6969696</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;