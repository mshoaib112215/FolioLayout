import React from 'react'
import './Footer.css'
import { images } from "../../Constants"

const Footer = () => {
    return (
        <div className="app__footer">
            <div className="app_footer-details">
                <span>About This Website</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur accusantium magni, aut beatae quo error cumque possimus cupiditate odit odio dicta, veniam blanditiis modi? Architecto neque cupiditate aliquam fugit temporibus commodi aut tenetur qui veniam dicta officiis maiores, ad quidem ipsam, illo culpa asperiores mollitia hic debitis consectetur laboriosam natus, unde iste rem? Laborum doloribus corrupti tenetur, dignissimos, sed in ab deleniti harum velit repellat at similique non vel laudantium nostrum esse architecto aspernatur. Dolorum ut cumque voluptates cupiditate accusantium numquam qui? Ullam adipisci exercitationem, veniam voluptemque eius blanditiis facilis, maiores eaque dolorum architecto omnis.
                </p>
            </div>
            <div className="app__footer-navbar">
                <div className="app__footer-logo">
                    <img src={images.logo} alt="Logo" />
                </div>
                <ul>
                    {['home', 'about', 'services', 'contact'].map((item) => (
                        <li className="app__flex" key={item} >

                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="app__flex">
                @2022 By Shoaib
            </div>
        </div>
    )
}

export default Footer