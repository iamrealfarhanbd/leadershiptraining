import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className="contact-page-section pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row rs-contact-box mb-90 md-mb-50">
                <div className="col-lg-4 col-md-12-4 lg-pl-0 sm-mb-30 md-mb-30">
                    <div className="address-item">
                    <div className="icon-part">
                        <img src="assets/images/contact/icon/1.png" alt />
                    </div>
                    <div className="address-text">
                        <span className="label">Address</span>
                        <span className="des">228-5 Main Street, Georgia, USA</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
                    <div className="address-item">
                    <div className="icon-part">
                        <img src="assets/images/contact/icon/2.png" alt />
                    </div>
                    <div className="address-text">
                        <span className="label">Email Address</span>
                        <span className="des"><a href="mailto:info@rstheme.com">info@rstheme.com</a></span>
                    </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30">
                    <div className="address-item">
                    <div className="icon-part">
                        <img src="assets/images/contact/icon/3.png" alt />
                    </div>
                    <div className="address-text">
                        <span className="label">Phone Number</span>
                        <span className="des"><a href="tel+0885898745">(+088)589-8745</a></span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-6 md-mb-30">
                    {/* Map Section Start */} 
                    <div className="contact-map3">
                    <iframe src="https://maps.google.com/maps?q=Fort%20Miley&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                    </div>
                </div>
                <div className="col-lg-6 pl-60 md-pl-15">
                    <div className="contact-comment-box">
                    <div className="inner-part">
                        <h2 className="title mb-mb-15">Get In Touch</h2>
                        <p>Have some suggestions or just want to say hi? Our  support team are ready to help you 24/7.</p>
                    </div>
                    <div id="form-messages" />
                    <form id="contact-form" method="post" action="mailer.php">
                        <fieldset>
                        <div className="row">
                            <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                            <input className="from-control" type="text" id="name" name="name" placeholder="Name" required />
                            </div> 
                            <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                            <input className="from-control" type="text" id="email" name="email" placeholder="Email" required />
                            </div>   
                            <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                            <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone" required />
                            </div>   
                            <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                            <input className="from-control" type="text" id="subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="col-lg-12 mb-50">
                            <textarea className="from-control" id="message" name="message" placeholder=" Message" required defaultValue={""} />
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <input className="btn-send" type="submit" defaultValue="Submit Now" />
                        </div>										   
                        </fieldset>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default ContactForm;