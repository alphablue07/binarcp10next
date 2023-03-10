import { Form, Container, Card, CardGroup, Row, Col, Button } from 'react-bootstrap';

import btnSlide from '../images/scroll_down.svg'
import '../../styles/slideshow.module.css';

const Slideshow = (props) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    props.data.map((request, index) => (
                        (index === 0) ?
                            <span data-target="#carouselExampleIndicators" className="dot active" data-slide-to={index} key={request.id}></span>
                            :
                            <span data-target="#carouselExampleIndicators" className="dot" data-slide-to={index} key={request.id}></span>

                    ))
                }

            </ol>
            <div className="carousel-inner">
                {
                    props.data.map((request, index) => (
                        (index === 0) ?
                            <div className="carousel-item active" key={request.id} style={{backgroundImage: `url(${request.data.hs_image})`, ...style.slideshow }}>
                                {/* <img className="d-block w-100" src={request.data.hs_image} /> */}
                            </div>
                            :
                            <div className="carousel-item" key={request.id} style={{backgroundImage: `url(${request.data.hs_image})`, ...style.slideshow }}>
                                {/* <img className="d-block w-100" src={request.data.hs_image} /> */}
                            </div>
                    ))
                }

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <img src={btnSlide} style={{ transform: "rotate(90deg)" }} />
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <img src={btnSlide} alt="" style={{ transform: "rotate(-90deg)" }} />
            </a>
        </div>
    )
}


var style = {
    slideshow: {
        height: 480,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
};

export default Slideshow