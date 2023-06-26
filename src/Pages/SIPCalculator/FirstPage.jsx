import React from 'react';
import img1 from '../../assets/images/carousel-1.jpg'
import img2 from '../../assets/images/carousel-2.jpg'
import img3 from '../../assets/images/carousel-3.jpg'

const FirstPage = () => {

  return (
    <div className='first_container'>    
    <div class="container first_container">
    <div class="row">
      <div class="col-md-6">
        <div class="d-flex flex-column h-100 bussiness_header">
          <h1 class="mb-4">Invest in mutual funds, where your money works as hard as you do.</h1>
          <a href="#" class="btn  contact_btn " >Get Started</a>
        </div>
      </div>
      <div class="col-md-6 first_image">
        <div class="card h-100  ">
          {/* <img src="https://demo.ayroui.com/templates/business-template/assets/images/header/hero-image.jpg" class="card-img" alt="Image"/> */}
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active carous_img">
      <img src={img1}  class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item carous_img">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item carous_img">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default FirstPage;
