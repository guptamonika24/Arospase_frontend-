import React from 'react'
import './Furtblog.css';
import { Link, useNavigate } from 'react-router-dom'
// import frtimg1 from '../assets/frtimg1.png';
import frtimg1 from '../../assets/frtimg1.png'
import frtimg2 from '../../assets/frtimg2.png';
import frtimg3 from '../../assets/frtimg3.png';
import frtimg4 from '../../assets/frtimg4.png';
import frtimg5 from '../../assets/frtimg5.png';
import Project from '../../Components/Project/Project'
function Furtblog() {
    const navigate = useNavigate()
    function goToBlog() {
        navigate("/allBlogs")
    }
    return (
        <>
            <div className="container-fluid">
                <div className='feature_head'>
                    <div class="row">
                        <div class="col-sm-6">
                            <div className='d-flex'>
                                <h3 className='frt_heading'>Featured Blogs</h3>
                                <button className='frtbtn1 px-1'>ALL BLOG <i class="bi bi-arrow-right-short"></i></button>
                            </div>
                            <div class="card1 mt-4">
                                <img src={frtimg1} alt="" />
                                <a href="" className='btn btn-primary blog_btn px-3' onClick={goToBlog}>Blog</a>
                            </div>

                            <div className='frt_heading2 mt-4'>
                                <h4 className='text-primary'>What if your drone fails</h4>
                                <h6>Emergency parachute recovery system</h6>
                                <h6>Mar 18, 2024 </h6>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div className='d-flex '>
                                <h3 className='frt_heading'>News</h3>
                                <button className='frtbtn2 px-1'>More News<i class="bi bi-arrow-right-short"></i> </button>
                            </div>
                            <div class="mt-4">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                    <div class="col">
                                        <img src={frtimg2} class="card-img-top" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt'>
                                            <h6 class="card-text text-primary">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={frtimg3} class="card-img-top" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt'>
                                            <h6 class="card-text text-primary mb-0">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={frtimg4} class="card-img-top" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt'>
                                            <h6 class="card-text text-primary">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={frtimg5} class="card-img-top" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt'>
                                            <h6 class="card-text text-primary">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="join_team p-5">
                <div className='d-flex justify-content-center'>
                    <h6 className='text-primary'>Join The Team</h6>
                    <small className='px-4 fw-bold'>Interested in a exiting opportunity to design and build future air solutions? <span className='text-primary'>View open roles</span> </small>
                </div>
            </div>
            <div className='dis_project'>
                <Project />
            </div>
        </>
    )
}

export default Furtblog
