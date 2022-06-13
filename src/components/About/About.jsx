import React from 'react'
import "./About.css"

const About = () => {
    const abouts = [
        { title: "Web Developer", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "Web Designer", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "UI/UX", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "Web Animations", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "Web Animations", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "Web Animations", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "Web Animations", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "Web Animations", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
        { title: "Web Animations", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora necessitatibus nam fuga asperiores natus. Id est, consectetur cumque at beatae iste? Magnam.' },
    ]
    return (
        <>
            <div className="app__about">
                <div style={{ color: 'var(--black-color)' }} id="about" className="text__head">

                    I Know a
                    <span> good <br />design </span>
                    Means
                    <span> good business</span>
                </div>
                <div className="app__profiles ">
                    {abouts.map((abouts, index) => (
                        <div className="app__profile-item" key={abouts.title + index}>
                            <br />
                            <h2 className="text__decoration">{abouts.title}</h2>
                            <br />
                            <p className="text__decoration ">{abouts.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default About