import React from 'react';
import "./Services.css";

const Services = () => {
    const services = [
        {
            title: "Web developer",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        },
        {
            title: "Business Consultant",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        },
        {
            title: "Quality Asurance Engineer",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        },
        {
            title: "UI/UX Designer",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        },
        {
            title: "UI/UX Designer",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        },
        {
            title: "UI/UX Designer",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        },
        {
            title: "UI/UX Designer",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        },
        {
            title: "UI/UX Designer",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic corporis cumque, rerum, fugit odit assumenda possimus, sed sapiente beatae accusamus vitae? Modi totam doloremque dicta officia nostrum quam minus quas explicabo earum! Est debitis sapiente neque quod doloribus fuga fugiat. Quibusdam sed ut architecto porro qui, similique accusamus incidunt, magni perspiciatis ipsa consectetur perferendis!'

        }

    ]
    return (
        <>
            {/* <div></div> */}
            <div style={{ padding: "50px", }} id="services" className="text__head-services">
                Our
                <span> Services  </span>
                Will
                <span> wonder </span>
                you
            </div>
            <div className="app__services">
                <div className="app__profiles ">
                    {services.map((services, index) => (
                        <div className="app__services-item" key={services.title + index}>
                            <br />
                            <h2 className="text__decoration">{services.title}</h2>
                            <br />
                            <p className="text__decoration ">{services.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Services