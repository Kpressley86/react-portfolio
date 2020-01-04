import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
      <div className="Contact">
          <div id="contact" class="container">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header p-3 mb-2 bg-dark">
                            <b class="neon">Contact</b>
                        </div>
                        <div class="card-body p-3 mb-2 bg-dark text-white">
                            <blockquote class="blockquote mb-0">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Email</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"
                                            placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="3"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-contact">Submit</button>
                                </form>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card">
                        <div class="card-header p-3 mb-2 bg-dark text-white">
                            <b class="neon">Connect with Me On:</b>
                        </div>
                        <div class="card-body p-3 mb-2 bg-dark text-white">
                            <blockquote class="blockquote mb-0">
                                <section class="sidebar">
                                    <div id="connect">

                                        <a href="https://github.com/Kpressley86?tab=repositories"><img
                                                src="assets/images/git-cat.png" class="social" alt="Github"></a>
                                        <a href="https://www.linkedin.com/in/kelly-pressley-5490b3184/"><img
                                                src="assets/images/linkedin.png" class="social" alt="LinkedIn"></a>
                                        <a href="https://stackoverflow.com/users/12097119/kelly-pressley"><img
                                                src="assets/images/stackoverflow.png" class="social"
                                                alt="Stack Overflow"></a>
                                    </div>
                                </section>
                            </blockquote>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;