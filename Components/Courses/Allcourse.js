import React from 'react'
import CardCourse from './CardCourse'
const AllCourses = () => {
    const cards = [
        {
            'id':"1",
            'img':"assets/images/courses/7.jpg"
        },
        {
            'id':"2",
            'img':"assets/images/courses/7.jpg"
        },
        {
            'id':"3",
            'img':"assets/images/courses/7.jpg"
        },
        {
            'id':"4",
            'img':"assets/images/courses/7.jpg"
        },
        {
            'id':"5",
            'img':"assets/images/courses/7.jpg"
        },
        {
            'id':"6",
            'img':"assets/images/courses/7.jpg"
        },
    ]
    return (
        <>
          <div id="rs-popular-courses" className="rs-popular-courses style3 orange-color pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">                  
                <div className="row">                     
                { cards.map((card) =>{
                return <CardCourse  card={card} key={card.id}/>
                     })}

               
                
                 </div>
               </div>
            </div>
  
        </>
    )
}

export default AllCourses;
