import React from 'react';
import './Sec5.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cd1 from '../../assets/Screenshot (47).png'
import cd2 from '../../assets/Screenshot (49).png'
import cd3 from '../../assets/Screenshot (52).png'

const Sec5 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container'>
            <h3 id='projects' className="text-center text-light ">Portfolio</h3>
            <h1 className="text-center sec2h1 my-3 mb-5">My Recent Projects</h1>
            <Carousel className='sec-5'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-gap-40-px"
                containerClass="carousel-container">
                <div className="card text-center cd-main h-100   p-3 ">
                    <img src={cd1} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-light">Amar-Zone</h5>
                        <p className="card-text text-light">This website create bassed react app and firebase authentication </p>
                        <a href="https://github.com/sohan004/shopping-react-router" className="btn btn-outline-primary me-3">Code Demo</a>
                        <a href="https://amar-zone.web.app/" className="btn btn-outline-success">Live Demo</a>
                    </div>
                </div>
                <div className="card text-center cd-main  h-100 p-3 ">
                    <img src={cd2} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-light">Tea-House</h5>
                        <p className="card-text text-light">This website create bassed Bootstrap 5 </p>
                        <a href="https://github.com/sohan004/tea-house" className="btn btn-outline-primary me-3">Code Demo</a>
                        <a href="https://stellular-semolina-a2ecd0.netlify.app/" className="btn btn-outline-success">Live Demo</a>
                    </div>
                </div>
                <div className="card text-center cd-main  h-100 p-3 ">
                    <img src={cd3} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-light">Bike Zone</h5>
                        <p className="card-text text-light">This website create bassed Bootstrap 5</p>
                        <a href="https://github.com/sohan004/bike-zone" className="btn btn-outline-primary me-3">Code Demo</a>
                        <a href="https://beamish-parfait-8cccfa.netlify.app/" className="btn btn-outline-success">Live Demo</a>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};
// https://github.com/sohan004/shopping-react-router
// https://amar-zone.web.app/

// https://github.com/sohan004/tea-house
// https://stellular-semolina-a2ecd0.netlify.app/

// https://github.com/sohan004/bike-zone
// https://beamish-parfait-8cccfa.netlify.app/
export default Sec5;