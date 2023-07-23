import React from 'react'

const Banner = () => {
  return (
    <section id="banner">
        <div className="container">
            <div className="banner__wrapper">
                <div className="banner__main">
                    <h2 className="banner__heading">
                        We Provi  Premium Consulting Service For your Business
                    </h2>
                    <h2 className="banner__pera">
                        The Premium Consulting Service provides a faster way to process plans, register dealings and create titles.
                    </h2>
                    <a href="#" className="banner__btn">get started now</a>
                    <div className="banner__link_main">
                        <p className="banner__link_pera">
                            Already member of our communty? 
                        </p>
                        <a href="#" className="banner__link">Sign in</a>
                    </div>
                    <div className="banner__review_wrapper">
                        <div className="banner__review">
                            <div className="banner__review_img">
                                <img src="/src/assets/client.png" alt="img"/>
                                <img className="review_img1" src="/src/assets/client.png" alt="img"/>
                                <img className="review_img2" src="/src/assets/client.png" alt="img"/>
                                <img className="review_img3" src="/src/assets/client.png" alt="img"/>
                            </div>
                            <div className="banner__review_heading_main">
                                <div className="banner__review_heading1">
                                    <h4 className="review_heading1">4.5</h4>
                                    <h4 className="review_heading2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </h4>
                                </div>
                                <div className="banner__review_heading2">
                                    <h4 className="review_heading3">
                                        305k Total Review
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="banner__video_main">
                            <div className="banner__video_circle_big">
                                <div className="banner__video_circle_small">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner__img_main">
                    <img src="/src/assets/Image.png" alt="img" className="banner__img"/>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Banner