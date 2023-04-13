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
                        <a href="mailto:zion.dit@dypvp.edu.in">zion.dit@dypvp.edu.in</a>
                    </div>
                    <div className="mid">
                        <div className="set-line">
                            <img src="./images/whatsapp.png" alt="" />
                            <h3>Whatsapp</h3>
                        </div>
                        <h4>Prabhat Chaubey</h4>
                        <a href="https://wa.link/o23nek">https://wa.link/o23nek</a>
                        <h4>Rohant Pawar</h4>
                        <a href="https://wa.link/2tlcuf">https://wa.link/2tlcuf</a>
                    </div>
                    <div className="right">
                        <div className="set-line">
                        <img src="./images/Phone.png" alt="" />
                            <h3>Phone</h3>
                        </div>
                        <h4>Name : Prabhat Chaubey</h4>
                        <p>+91 77700 98538</p>
                        <h4>Name : Rohant Pawar</h4>
                        <p>+91 98224 97461</p>
                    </div>
                    <div className="left">
                        <div className="set-line">
                        <img src="./images/address.png" alt="" />
                            <h3>Address</h3>
                        </div>
                        <p>Dr. D.Y. Patil institute Of TechnologySant Tukaram Nagar, Pimpri Colony, Pune, Maharashtra, 411018</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;