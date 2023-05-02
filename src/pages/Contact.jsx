import React from 'react';
import PageTitle from '../components/pagetitle';


function Contact(props) {
    return (
        <div>
            <PageTitle title='Contact Us' />

            <section className="tf-section tf-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="content-about m-b50 mobie-40" data-aos="fade-right" data-aos-duration="800">
                                <div className="tf-title st2 m-b17">
                                    <h4 className="title">Have a question </h4>
                                </div>
                                <p className="m-r-40">Fill up the Form  and ou team will get back to within 24 hrs</p>
                            </div>
                            <form action="contact/contact-process.php" className="form-contact" id="contactform" data-aos="fade-right" data-aos-duration="800">
                                <fieldset>
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                </fieldset>
                                <fieldset>
                                    <input type="email" name="mail" id="mail" placeholder="Email Address" />
                                </fieldset>
                                <fieldset>
                                    <input type="number" name="phone" id="phone" placeholder="Phone" />
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your Messege" rows="5" tabIndex="4" name="message" className="message" id="message"></textarea>
                                </fieldset>
                                <button className="tf-button btn-effect" type="submit"><span className="boder-fade"></span><span className="effect">Send Message</span></button>
                            </form>
                        </div>
                        <div className="col-xl-7  col-md-12">
                            <div className="contact-details" data-aos="fade-left" data-aos-duration="800">
                                <div className="adress wrap-fx">
                                    <div className="location">
                                        <h6>Location</h6>
                                        <ul>
                                            <li>Alpenstrasse 17, 3006 Bern, Switzerland</li>
                                        </ul>
                                    </div>
                                    <div className="mail">
                                        <h6>Contact Us</h6>
                                        <ul>
                                            <li>+41 742 96 72</li>
                                            <li>info@gfedo.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flat-map wow fadeIn animated" data-wow-delay="0.3ms" data-wow-duration="1000ms">
                                    <iframe title='map' className="map-content" src="https://www.google.com/maps/place/Alpenstrasse+17,+3006+Bern,+Sv%C3%A1jc/@46.9427455,7.4540157,17z/data=!3m1!4b1!4m6!3m5!1s0x478e39da74a7aca9:0xad6c4897f84809d1!8m2!3d46.9427455!4d7.456596!16s%2Fg%2F11c88brl1k" width="1720" height="655" allowFullScreen="" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;