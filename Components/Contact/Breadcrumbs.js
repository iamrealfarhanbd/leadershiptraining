import React from 'react'

const ContactBreadcrumbs = () => {
    return (
        <>
        <div className="rs-breadcrumbs breadcrumbs-overlay">
        <div className="breadcrumbs-img">
            <img src="assets/images/breadcrumbs/5.jpg" alt="Breadcrumbs Image" />
        </div>
        <div className="breadcrumbs-text white-color padding">
            <h1 className="page-title white-color">Contact Us</h1>
            <ul>
            <li>
                <a className="active" href="index.html">Home</a>
            </li>
            <li>Contact Us</li>
            </ul>
        </div>
        </div>	
        </>
    )
}

export default ContactBreadcrumbs;
