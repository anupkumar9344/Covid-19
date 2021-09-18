import React from 'react'
import './About.css'
import img1 from './Assets/c1.jpeg'
import img2 from './Assets/c2.jpg'
import img3 from './Assets/c3.jpeg'
export const About1 = () => {
    return (
        <div className="mb-5">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-center">
                                <h5>Wash your hands frequently</h5>
                                <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-center">
                                <h5>Maintain social distancing</h5>
                                <p>Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-center">
                                
                                <h5>Avoid touching face</h5>
                                <p>Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
           
    )
}
export default About1;