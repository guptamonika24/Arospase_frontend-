import React from 'react'
import './Seeportfolio.css'
import portfolioimg1 from "../../assets/portfolioimg1.png"
import portfolioimg2 from "../../assets/portfolioimg2.png"
import Project from '../../Components/Project/Project'
const Seeportfolio = () => {
  return (
    <>
    <div className='container mt-5'>
      <h3 className='portfolio_heading px-2'>See Detailed Solution Portfolio</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-5 mx-5">
      <div class="col">
          <div class="card border-primary border-1">
            <img src={portfolioimg1} class="portfolio_img" alt="..." />
            <div class="card-footer border-primary border-5">
              <h6 class=" text-center text-primary mt-3">Download Design and Development brochure</h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-primary border-1">
            <img src={portfolioimg2} class="portfolio_img" alt="..." />
            <div class="card-footer border-primary border-5">
              <h6 class=" text-center text-primary mt-3">Download Design and Development brochure</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Project />
    </>
  )
}

export default Seeportfolio
