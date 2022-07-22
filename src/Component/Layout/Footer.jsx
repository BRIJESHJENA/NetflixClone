import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-black">
        <footer className="text-center text-lg-start bg-black">
          <div className="container d-flex p-4">
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/brijesh-jena-071ab6215/" className="text-white me-4">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com/BRIJESHJENA" className="text-white me-4">
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>

          <section>
            <div className="container text-center text-secondary text-md-start text">
              <div className="row">
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-decoration-none text-secondary"
                    >
                      Media Centre
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-decoration-none text-secondary"
                    >
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-decoration-none text-secondary"
                    >
                      Contact Us
                    </a>
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-decoration-none text-secondary"
                    >
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-decoration-none text-secondary"
                    >
                      Legal Notices
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Help Centre
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <p>
                    <a href="#" className="text-decoration-none text-secondary">
                      Gift Card
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-decoration-none text-secondary"
                    >
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-decoration-none text-secondary"
                    >
                      Corporate Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="container text-secondary p-3">
            © 1997 Copyright:
            <a
              className="text-decoration-none text-secondary"
              href=""
            >
              Netflix India
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
