import React from 'react'

const Footer = () => {
    return (
        <>    
  <div className="rs-newsletter style1 mb--124 sm-mb-0 sm-pb-70">
    <div className="container">
      <div className="newsletter-wrap">
        <div className="row y-middle">
          <div className="col-md-6 sm-mb-30">
            <div className="sec-title">
              <div className="sub-title white-color">Newsletter</div>
              <h2 className="title mb-0 white-color">Subscribe Us to join <br /> Our Community </h2>
            </div>
          </div>
          <div className="col-md-6">
            <form className="newsletter-form">
              <input type="email" name="email" placeholder="Enter Your Email" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer id="rs-footer" className="rs-footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
            <h4 className="widget-title">Explore</h4>
            <ul className="site-map">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">All Courses</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
            <h4 className="widget-title">Resourse</h4>
            <ul className="site-map">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Our Partners</a></li>
              <li><a href="#">Redeem Voucher</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
            <h4 className="widget-title">Address</h4>
            <ul className="address-widget">
              <li>
                <i className="flaticon-location" />
                <div className="desc">503 Old Buffalo Street Northwest #205 New York-3087</div>
              </li>
              <li>
                <i className="flaticon-call" />
                <div className="desc">
                  <a href="tel:(123)-456-7890">(123)-456-7890</a> , 
                  <a href="tel:(123)-456-7890">(123)-456-7890</a>
                </div>
              </li>
              <li>
                <i className="flaticon-email" />
                <div className="desc">
                  <a href="mailto:infoname@gmail.com">infoname@gmail.com</a> , 
                  <a href="#">www.yourname.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">                    
        <div className="row y-middle">
          <div className="col-lg-4 md-mb-20">
            <div className="footer-logo md-text-center">
              <a href="index.html"><img src="assets/images/logo.png" alt /></a>
            </div>
          </div>
          <div className="col-lg-4 md-mb-20">
            <div className="copyright text-center md-text-left">
              <p>© 2020 All Rights Reserved. Developed By <a href="http://rstheme.com/">RSTheme</a></p>
            </div>
          </div>
          <div className="col-lg-4 text-right md-text-left">
            <ul className="footer-social">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div id="scrollUp">
    <i className="fa fa-angle-up" />
  </div>
  <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex={-1}>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span className="flaticon-cross" />
    </button>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="search-block clearfix">
          <form>
            <div className="form-group">
              <input className="form-control" placeholder="Search Here..." type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


        </>
    )
}

export default Footer
