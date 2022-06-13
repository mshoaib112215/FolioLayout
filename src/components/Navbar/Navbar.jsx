import React, { useState } from 'react'
import { Link } from "react-scroll";
import { images } from '../../Constants';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__nabvar-menu">
                <li className="app__flex">
                    <div />
                    <Link to='app' spy={true} smooth={true} offset={0} duration={500}>HOME</Link>
                </li>
                {['about', 'services', 'contact'].map((item) => (

                    <li className="app__flex" key={item}  >

                        <div />

                        <Link to={`${item}`} spy={true} smooth={true} offset={0} duration={500} >{item}</Link>



                    </li>

                ))}

            </ul>
            <div className="app__navbar-link" >
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (<div>
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        <li>
                            <Link to='app' spy={true} smooth={true} offset={0} duration={500} onClick={() => setToggle(false)}>HOME</Link>
                        </li>
                        {['about', 'services', 'contact'].map((item) => (
                            <li key={`link-${item}`}>
                                <Link to={`${item}`} spy={true} smooth={true} offset={0} duration={500} onClick={() => setToggle(false)}> {item}</Link>
                            </li>
                        ))};

                    </ul>
                </div>)
                }



            </div>
        </nav>
    )
}

export default Navbar