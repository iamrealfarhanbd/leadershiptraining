
function CardCourse({card}) {
    return (
        <>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                    <div className="courses-item">
                    <div className="img-part">
                        <img src={card.img} alt />
                    </div>
                    <div className="content-part">
                        <span><a className="categories" href="#">Photography</a></span>
                        <ul className="meta-part">
                        <li className="user"><i className="fa fa-user" /> 245</li>
                        <li><span className="price">$55.00</span></li>
                        </ul>
                        <h3 className="title"><a href="course-single.html">The Art of Black and White Photography</a></h3>
                        <div className="bottom-part">
                        <div className="info-meta">
                            <ul>                                                
                            <li className="ratings">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                (05)
                            </li>
                            </ul>
                        </div>
                        <div className="btn-part">
                            <a href="#">Apply Now<i className="flaticon-right-arrow" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                 </div>
            
        </>
    )
}

export default CardCourse
