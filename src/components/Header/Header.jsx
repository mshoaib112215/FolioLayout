import React from 'react'
import { images } from '../../Constants'
import "./Header.css"

const Header = () => {
    return (
        <div className="app__header">
            <div className="app__header-intro">
                <p>Hi, I am</p>
                <h1>Noor</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi delectus expedita, blanditiis provident error fugit ad aspernatur ipsam distinctio omnis itaque sapiente!</p>
            </div>
            <div className="app__header-image">
                <img src={images.profile} alt="" />
            </div>
        </div>
    )
}

export default Header