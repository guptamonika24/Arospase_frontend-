import React from 'react'
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footerlogo from "../../assets/Footerlogo.png"
function Footer() {
    return (
        <div className="footer_head">
            <div class="container">
            <div className="main_border">
                <div className="row" style={{ borderTop: "3px solid #414042", borderBottom: "3px solid #414042" }} >
                    <div className="col-lg-3 col-md-6 foot_logo mt-4">
                        <img src={Footerlogo} className="card-img-top" alt="Card Image" />
                        <div className="card-body1 mt-4 text-white ">
                            <h6>+91 721 928 6003</h6>
                            <h6>+91 721 928 6003</h6>
                        </div>
                        <h6 className='text-white '>info@aethroneaerospace.com</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 text-white mt-5">
                        <h5>What We Do? <br />Service</h5>
                        <div className="card-body1">
                            <h6>Design and Development</h6>
                            <h6>Precision Manufacturing</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 text-white mt-5">
                        <h5 className='mt-5'>Product</h5>
                        <div className="card-body1">
                            <h6>Launch and Recovery/Delivery</h6>
                            <h6>Parachutes</h6>
                            <h6>Advanced Composites</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 text-white mt-5">
                        <h6>HeadOffice</h6>
                        <div className="card-body1">
                            <h6>Oz Plaza Viman Nagar Pune<br /> Maharashtra 411014</h6>
                        </div>
                    </div>
                </div>
            </div>
                <div class="justify-content-between d-flex" style={{padding:"40px"}}>
                    <div class="">
                        <div className="d-flex align-items-center  ">
                            <div className='social_icon1'>
                                <i class="bi bi-linkedin"></i>
                            </div>
                            <div className='social_icon2'>
                                <i class="bi bi-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h6 className='text-light'>© 2015 Aethrone Aerospace. All rights reserved</h6>
                    </div>
                </div>
        
            </div>
            {/* <div className="container"> */}
        </div>
        // </div>


    )
}

export default Footer
