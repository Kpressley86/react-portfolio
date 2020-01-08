import React from 'react';
import './Contact.css';
import GitHub from '../images/git1.gif';
import Stack from '../images/stackoverflow.png';
import Link from '../images/linkedin.png';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="card">
                <div className="card-header p-3 mb-2 bg-dark">
                    <b className="neon">Contact</b>
                </div>
                <div className="card-body p-3 mb-2 bg-dark text-white">
                    <blockquote className="blockquote mb-0">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputName" 
                                placeholder="Enter Name" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputEmail"
                                placeholder="Enter Email" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea"
                                rows="3" 
                                placeholder="Leave me a message here!" 
                                />
                            </div>
                            <button 
                            type="submit" 
                            className="btn btn-contact"
                            >Submit</button>
                        </form>
                    </blockquote>
                </div>
            </div>

            <div className="card conectBox">
                <div className="card-header p-3 mb-2 bg-dark text-white">
                    <b className="neon">Connect With Me:</b>
                </div>
                <div className="card-body p-3 mb-2 bg-dark text-white">
                    <blockquote className="blockquote mb-0">
                        <section className="sidebar">
                            <div id="connect">

                                <a id="GHub" href="https://github.com/Kpressley86?tab=repositories"><img
                                    src={GitHub} className="social" alt="Github" /></a>
                                <a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/"><img
                                    src={Link} className="social" alt="LinkedIn" /></a>
                                <a href="https://stackoverflow.com/users/12097119/kelly-pressley"><img
                                    src={Stack} className="social"
                                    alt="Stack Overflow" /></a>
                            </div>
                        </section>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Contact;