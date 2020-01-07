import React from 'react';
import './Contact.css';

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
                                <label for="exampleInputEmail1">Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                    rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-contact">Submit</button>
                        </form>
                    </blockquote>
                </div>
            </div>


            <div className="card">
                <div className="card-header p-3 mb-2 bg-dark text-white">
                    <b className="neon">Connect with Me On:</b>
                </div>
                <div className="card-body p-3 mb-2 bg-dark text-white">
                    <blockquote className="blockquote mb-0">
                        <section className="sidebar">
                            <div id="connect">

                                <a href="https://github.com/Kpressley86?tab=repositories"><img
                                    src="assets/images/git-cat.png" className="social" alt="Github" /></a>
                                <a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/"><img
                                    src="assets/images/linkedin.png" className="social" alt="LinkedIn" /></a>
                                <a href="https://stackoverflow.com/users/12097119/kelly-pressley"><img
                                    src="assets/images/stackoverflow.png" className="social"
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