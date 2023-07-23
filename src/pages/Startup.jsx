import React from 'react'

const Startup = () => {
  return (
    <section id="startup">
        <div className="container">
            <div className="startup__wrapper">
                <div className="startup__wrapper_img">
                    <img className="startup__img_big" src="/src/assets/startup_big.png" alt=""/>
                    <div className="startup__img_small">
                        <img src="/src/assets/team1.jpg" alt="img"/>
                    </div>
                </div>
                <div className="startup__wrapper_heading">
                    <h2 className="startup__heading">
                        Startup digital platform for investing
                    </h2>
                    <div className="startup__pera_main">
                        <p className="startup__pera">
                            Securing Digital Payment
                        </p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="startup__pera_main">
                        <p className="startup__pera">
                            Investing in Digital Company
                        </p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="startup__pera_main">
                        <p className="startup__pera">
                            Securing Digital Payment
                        </p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="startup__pera_main">
                        <p className="startup__pera">
                            Building the  idea of future
                        </p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="startup__pera_main">
                        <p className="startup__pera">
                            Accurate and friendly support
                        </p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Startup