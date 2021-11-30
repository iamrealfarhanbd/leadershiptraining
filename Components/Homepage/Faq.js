import React from 'react'

const Faq = () => {
    return (
        <>
         <div className="rs-faq-part style1 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 padding-0">
                    <div className="main-part">
                    <div className="title mb-40 md-mb-15">
                        <h2 className="text-part">What More from Leadership Training</h2>
                    </div>
                    <div className="faq-content">
                        <div id="accordion" className="accordion">
                        <div className="card">
                            <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">Team Management Ability?</a>
                            </div>
                            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false">Excellent Communicative Skill?</a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false">Strategic Thinking Skills?</a>
                            </div>
                            <div id="collapseThree" className="collapse" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                            </div>
                        </div>     
                        <div className="card">
                            <div className="card-header">
                            <a className="card-link collapsed" data-toggle="collapse" href="#collapsefour" aria-expanded="false">Enhanced Creativity?</a>
                            </div>
                            <div id="collapsefour" className="collapse" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 padding-0">
                    <div className="img-part media-icon">
                    <a className="popup-videos" href="https://www.youtube.com/watch?v=atMUy_bPoQI">
                        <i className="fa fa-play" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Faq
