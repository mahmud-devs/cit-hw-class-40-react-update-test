import React from 'react'

const Nav = () => {
  return (
    <section id="nav">
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <img src="./assets/logo.png" alt="img"/>
                </div>
                <div className="nav__menu">
                    <ul className="nav__menu_list">
                        <li>
                            <a className="nav__menu_link" href="#">home</a>
                        </li>
                        <li>
                            <a className="nav__menu_link" href="#">home</a>
                        </li>
                        <li>
                            <a className="nav__menu_link" href="#">home</a>
                        </li>
                        <li>
                            <a className="nav__menu_link" href="#">home</a>
                        </li>
                        <li>
                            <a className="nav__menu_link" href="#">home</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__btn_main">
                    <a href="#" className="nav__btn">login</a>
                    <a href="#" className="nav__btn">Free    Consultation</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nav