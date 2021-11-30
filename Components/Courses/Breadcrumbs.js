import React from 'react'

const Breadcrumbs = () => {
    return (
        <>
          <div className="rs-breadcrumbs breadcrumbs-overlay">
            <div className="breadcrumbs-img">
                <img src="assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
            </div>
            <div className="breadcrumbs-text white-color">
                <h1 className="page-title">Course Grid 02</h1>
                <ul>
                <li>
                    <a className="active" href="index.html">Home</a>
                </li>
                <li>Course</li>
                </ul>
            </div>
            </div>
 
        </>
    )
}

export default Breadcrumbs;
