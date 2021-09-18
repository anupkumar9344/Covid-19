import React from 'react'
import './About.css'

export const AboutTretment = () => {
    return (
        <div>
            <div className="container-fluid mt-5 p-md-5 mb-5 bg-yellow">
                <div className="row">
                    <div style={{marginTop:"50px"}} className="col-sm-12 col-md-6 col-lg-6 text-center">
                        <h5>BE CAREFULL & STAY SAFE</h5>
                        <h3>TREATMENT FOR CORONAVIRUS</h3>
                        <p><b>To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019.</b> However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care. Antibiotics do not help, as they do not work against viruses. Treatment aims to relieve the symptoms while your body fights the illness. You'll need to stay in isolation, away from other people, until you have recovered.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card p-2">
                            <div className="card-body">
                                <div className="card-title">Self Care</div>
                                <p className="card-text">If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:</p>
                                <ul>
                                    <li>Rest and sleep</li>
                                    <li>Keep warm</li>
                                    <li>Drink plenty of liquids</li>
                                    <li>Use a room humidifier or take a hot shower to help ease a sore throat and cough</li>
                                </ul>
                                <div className="card-title">Medical Treatments</div>
                                <p className="card-text">If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutTretment;