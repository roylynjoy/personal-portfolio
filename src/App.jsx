import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/*/ Nav Star /*/}
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          DevFolio
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/*/ Nav End /*/}
    {/*/ Intro Skew Star /*/}
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: "url(img/intro-bg.jpg)" }}
    >
      <div className="overlay-itro" />
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            {/*<p class="display-6 color-d">Hello, world!</p>*/}
            <p className='myname'>I am Roylyn Dicdican</p>
            <p className="intro-subtitle">
              <div id='u'>
                CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic
                Designer</div>
            </p>
            {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
          </div>
        </div>
      </div>
    </div>
    {/*/ Intro Skew End /*/}
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src="img/testimonial-2.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span id='span1'>Roylyn Dicdican</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span id='span1'>full stack developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span id='span1'>roylynjoyestrera@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span id='span1'>(+63) 907 3818 006</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skills</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>PHP</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>JAVASCRIPT</span>{" "}
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      My name is Roylyn Dicdican, and I am currently pursuing a Bachelor of Science in Information Systems. 
                      I have a strong interest in the intersection of technology and business, 
                      and I enjoy learning about how systems and data can drive efficiency and innovation.  
                    </p>
                    <p className="lead">
                      My academic journey has helped me develop skills in programming, 
                      data analysis, and project management, 
                      which I look forward to applying in real-world scenarios.
                    </p>
                    <p className="lead">
                      Outside of my studies, I enjoy watching movies, and arts, 
                      which help me stay balanced and motivated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Section Services Star /*/}
    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">
                Choose the service you need.
              </p>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-monitor" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                I provide web design services that create user-friendly, 
                visually appealing websites optimized for performance 
                and responsiveness across all devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-code-working" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                I offer web development services focused on building dynamic,
                secure, and scalable websites using the latest 
                technologies to meet your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-camera" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Photography</h2>
                <p className="s-description text-center">
                I provide professional photography services, 
                capturing high-quality images that bring your moments, products, 
                or events to life with creativity and attention to detail.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-android-phone-portrait" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Responsive Design</h2>
                <p className="s-description text-center">
                I offer responsive design services that ensure your 
                website adapts seamlessly to any device, providing an 
                optimal user experience on mobile, tablet, and desktop screens.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-paintbrush" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Graphic Design</h2>
                <p className="s-description text-center">
                I provide graphic design services, creating visually 
                compelling designs that effectively communicate your 
                brand’s message across various platforms and media.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-stats-bars" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Marketing Services</h2>
                <p className="s-description text-center">
                I offer marketing services focused on creating effective 
                strategies to enhance brand visibility, engage target audiences, 
                and drive business growth through digital and traditional channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Section Services End /*/}
    <div
      className="section-counter paralax-mf bg-image"
      style={{ backgroundImage: "url(img/counters-bg.jpg)" }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="ion-checkmark-round" />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">0</p>
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="ion-ios-calendar-outline" />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">3</p>
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="ion-ios-people" />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">0</p>
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="ion-ribbon-a" />
                </span>
              </div>
              <div className="counter-num">
                <p className="counter">0</p>
                <span className="counter-text">AWARD WON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ Section Portfolio Star /*/}
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Highlights creative projects in web development and design.
              </p>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-1.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Movie Page Concept</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-2.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">NFT Avatars</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-3.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Analytics UX</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-4.gif" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-4.gif" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Bindo Laro Cado</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-5.gif" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-5.gif" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Lena Mado</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/work-6.gif" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/work-6.gif" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Big Bang</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2017</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Section Portfolio End /*/}
    {/*/ Section Testimonials Star /*/}
    <div
      className="testimonials paralax-mf bg-image"
      style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-mf" className="owl-carousel owl-theme">
              <div className="testimonial-box">
                <div className="author-test">
                  <img
                    src="img/testimonial-2.jpg"
                    alt=""
                    className="rounded-circle b-shadow-a"
                  />
                  <span className="author">Xavi Alonso</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span className="comit">
                    <i className="fa fa-quote-right" />
                  </span>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="author-test">
                  <img
                    src="img/testimonial-4.jpg"
                    alt=""
                    className="rounded-circle b-shadow-a"
                  />
                  <span className="author">Marta Socrate</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span className="comit">
                    <i className="fa fa-quote-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ Section Blog Star /*/}
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Blog</h3>
              <p className="subtitle-a">
              Explores insights on web development, 
              design, and the latest tech trends, 
              offering valuable tips and knowledge for readers.
              </p>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html">
                  <img src="img/post-1.jpg" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Travel</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="blog-single.html">See more ideas about Travel</a>
                </h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img
                      src="img/testimonial-2.jpg"
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">Roylyn Dicdican</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="ion-ios-clock-outline" /> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html">
                  <img src="img/post-2.jpg" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="blog-single.html">See more ideas about Travel</a>
                </h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img
                      src="img/testimonial-2.jpg"
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">Roylyn Dicdican</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="ion-ios-clock-outline" /> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html">
                  <img src="img/post-3.jpg" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="blog-single.html">See more ideas about Travel</a>
                </h3>
                <p className="card-description">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img
                      src="img/testimonial-2.jpg"
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">Roylyn Dicdican</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="ion-ios-clock-outline" /> 10 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Section Blog End /*/}
    {/*/ Section Contact-Footer Star /*/}
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form
                        action=""
                        method="post"
                        role="form"
                        className="contactForm"
                      >
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage" />
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                              />
                              <div className="validation" />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation" />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div className="validation" />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                                defaultValue={""}
                              />
                              <div className="validation" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                      Feel free to get in touch to learn more about my services 
                      or discuss new projects. Whether you have questions or want to collaborate, 
                      I’m here to help and will respond promptly. Let’s connect!
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location" /> ADD st. Apalit
                          Pampanga, 2016
                        </li>
                        <li>
                          <span className="ion-ios-telephone" /> (+63) 907-381-8006
                        </li>
                        <li>
                          <span className="ion-email" /> roylynjoyestrera@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="https://web.facebook.com/roylynjoydicdican">
                            <span className="ico-circle">
                              <i className="ion-social-facebook" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/roylyndicdican/">
                            <span className="ico-circle">
                              <i className="ion-social-instagram" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-twitter" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://ph.pinterest.com/roylynjoyestrera/">
                            <span className="ico-circle">
                              <i className="ion-social-pinterest" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  © Copyright <strong>DevFolio</strong>. All Rights Reserved
                </p>
                <div className="credits">
                  {/*
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
            */}
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    {/*/ Section Contact-footer End /*/}
    <a href="#" className="back-to-top">
      <i className="fa fa-chevron-up" />
    </a>
</>

  )
}

export default App
