import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="text__head-contact">
                    Lets Take <span>Cofee</span> Together
                    <span> <br /> Contact </span>
                    me
                </div>
                <section className="contact">
                    <div className="container ">


                        <div className="app__contact-form">
                            <form >
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>

                                <div className="app__contact-button"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>


                </section >
            </div>
        </>
    )
}

export default Contact