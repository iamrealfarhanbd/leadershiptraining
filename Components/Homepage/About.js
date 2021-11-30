import React from 'react'

const About = () => {
    return (
        <>
        <div id="rs-about" className="rs-about style1 pb-100 md-pb-70">
          <div className="container">
            <div className="row">
            <div className="col-lg-4 order-last">
                <div className="notice-bord style1">
                <h4 className="title">Notice Board</h4>
                <ul>
                    <li className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                    <div className="date"><span>20</span>June</div>
                    <div className="desc">Quality assured</div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="2000ms">
                    <div className="date"><span>22</span>Aug</div>
                    <div className="desc">Skill development guaranteed</div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">
                    <div className="date"><span>14</span>May</div>
                    <div className="desc">Low cost Learning</div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="600ms" data-wow-duration="2000ms">
                    <div className="date"><span>31</span>Sept</div>
                    <div className="desc">CV enriching certificate</div>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-lg-8 pr-50 md-pr-15">
                <div className="about-part">
                <div className="sec-title mb-40">
                    <div className="sub-title primary wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">About Us</div>
                    <h2 className="title wow fadeInUp" data-wow-delay="400ms" data-wow-duration="2000ms">Collaborating with aspiring professionals renowned for awesome leadership, we aspire
to equip you with all the essential leadership skills for your ultimate career success.</h2>
                    <div className="desc wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem sum dolor sit amet, consectetur adipisicing.</div>
                </div>
                <div className="sign-part wow fadeInUp" data-wow-delay="600ms" data-wow-duration="2000ms">
                    <div className="img-part">
                    <img src="assets/images/about/ceo.png" alt="CEO Image" />
                    </div>
                    <div className="author-part">
                    <span className="sign mb-10"><img src="assets/images/about/sign.png" alt="Sign" /></span>
                    <span className="post">CEO &amp; Founder of Educavo</span>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}

export default About
