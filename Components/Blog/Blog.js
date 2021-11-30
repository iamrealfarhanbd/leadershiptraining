import React from 'react'
import BlogAside from './Blog-Aside'

const Blog = () => {
    return (
        <>
        <div className="rs-inner-blog orange-color pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row">
                
                <BlogAside />

                <div className="col-lg-8 pr-50">
                    <div className="row">
                    <div className="col-lg-12 mb-70">
                        <div className="blog-item">
                        <div className="blog-img">
                            <a href="#"><img src="assets/images/blog/inner/1.jpg" alt /></a>
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title"><a href="#">University while the lovely valley team work</a></h3>
                            <div className="blog-meta">
                            <ul className="btm-cate">
                                <li>
                                <div className="blog-date">
                                    <i className="fa fa-calendar-check-o" /> September 14, 2020                                                        
                                </div>
                                </li>
                                <li>
                                <div className="author">
                                    <i className="fa fa-user-o" /> admin  
                                </div>
                                </li>   
                                <li>
                                <div className="tag-line">
                                    <i className="fa fa-book" />
                                    <a href="#">University</a> 
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="blog-desc">   
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam...                                     
                            </div>
                            <div className="blog-button">
                            <a className="blog-btn" href="#">Continue Reading</a>
                            </div>
                        </div>
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

export default Blog
