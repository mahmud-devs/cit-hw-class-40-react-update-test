import React from 'react'

const Solutionst = () => {
  return (
    <section id="solution">
        <div className="container">
            <div className="solution__wrapper">
                <div className="solution__heading_main">
                    <h2 className="solution__heading">
                        Best Reliable Solution For Your Business
                    </h2>
                    <p className="solution__heading_pera">
                        We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing.
                    </p>
                    <a href="#" className="solution__heading_btn">
                        get started now
                    </a>
                    <div className="solution__heading_class">
                        <div className="solution__class">
                            <h2 className="solution__class_heading">
                                First-class investment solutions
                            </h2>
                            <p className="solution__class_pera">
                                We can help you with your business strategy, architecture, mapping, and optimisation. 
                            </p>
                        </div>
                        <div className="solution__class">
                            <h2 className="solution__class_heading">
                                Building the idea of future
                            </h2>
                            <p className="solution__class_pera">
                                Offering Performance Driven Partnerships CIBA Specializes In Business Process Outsourcing.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="solution__img_main">
                    <div className="solution__img_small">
                        <img className="img_small_main" src="/src/assets/solution1.jpg" alt="img"/>
                    </div>
                    <div className="solution__img_big">
                        <img src="/src/assets/solution_big.jpg" alt="img" className="img_big_main"/>
                    </div>
                    <div className="solution__img_counter">
                        <h2 className="img_counter_number">24</h2>
                        <h4 className="img_counter_heading">
                            Years Experience
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solutionst