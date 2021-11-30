import Aboutus from '../Components/About/About-video'
import Breadcrumbs from '../Components/About/Breadcrumbs'
import Counter from '../Components/About/Counter'
import Team from '../Components/About/Team'
import Blog from '../Components/Homepage/Blog'
import Testimonial from '../Components/Homepage/Testimonial'


export default function AboutPage() {
    return (
        <>
            <Breadcrumbs />
            <Counter />
            <Aboutus />
            <Team />
            <Testimonial />
            <Blog />
        </>
    )
}