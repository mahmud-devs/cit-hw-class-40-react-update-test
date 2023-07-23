import React from 'react'

const About = () => {
  return (
    <section id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__main">
                    <h1 className="about__main_circle"></h1>
                    <img src="/src/assets/team1.jpg" alt="img" className="about__main_img"/>
                </div>
                <div className="about__heading">
                    <p className="about__heading_pera">ABOUT US</p>
                    <h2 className="about__heading_heading">
                        Welcome to World Best Business Company
                    </h2>
                    <p className="about__heading_pera_1">
                        We partner with experienced and qualified Accountants, Financial Advisors and Chartered Secretaries to provide
                    </p>
                    <div className="about__heading_list">
                        <img src="/src/assets/Check.png" alt="img" className="about__heading_list_img"/>
                        <p className="about__heading_list_pera">
                            Monthly assesment report
                        </p>
                    </div>
                    <div className="about__heading_list">
                        <img src="/src/assets/Check.png" alt="img" className="about__heading_list_img"/>
                        <p className="about__heading_list_pera">
                            Tax planning consultation
                        </p>
                    </div>
                    <div className="about__heading_list">
                        <img src="/src/assets/Check.png" alt="img" className="about__heading_list_img"/>
                        <p className="about__heading_list_pera">
                            Montly rent problem solution
                        </p>
                    </div>
                    <a href="#" className="about__heading_list_btn">Free Consultation</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About