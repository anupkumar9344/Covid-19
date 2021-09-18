import React from 'react'
import img1 from './Assets/ac1.png'
import img2 from './Assets/ac2.png'
import img3 from './Assets/ac3.png'



export const AboutCard = () => {
    return (
        <div>
            <div className="container-fluid text-center mt-5">
            <h4>HOW CORONAVIRUS IS SPREAD</h4>
            <h1>TRANSMISSION OF COVID-19</h1>
            <h6>Because it's a new illness, we do not know exactly how coronavirus spreads from person to person. Similar viruses are spread in cough droplets.</h6>
            <div className="row mt-2">
            <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                    <div class="card">
                        <img src={img1} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h4 className="card-title">Person-to-person spread as close contact with infected</h4>
                            <p class="card-text">The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h4 className="card-title">Touching or contact with infected surfaces or objects</h4>
                            <p class="card-text">A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h4 className="card-title">Droplets that from infected person coughs or sneezes</h4>
                            <p class="card-text">The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
                        </div>
                    </div>
                </div>
            
            </div>
             </div>
        </div>
    )
}
export default AboutCard;