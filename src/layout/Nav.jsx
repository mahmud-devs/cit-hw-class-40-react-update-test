import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <section id="nav">
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <img src="/src/assets/logo.png" alt="img"/>
                </div>
                <div className="nav__menu">
                    <ul className="nav__menu_list">
                        <li>
                            <NavLink className="nav__menu_link" to="/">
                                home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__menu_link" to="/about">
                                about
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__menu_link" to="/service">
                                service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__menu_link" to="/team">
                                team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__menu_link" to="/gallery">
                                gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__menu_link" to="/plan">
                                plan
                            </NavLink>
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