import { Container, Col } from "react-bootstrap";
import Particle from "../components/Particle";


export default function Contact() {

  return (
    <Container fluid className="contact" id="contact">
       <Particle />
        <Col className=" my-4 backdrop-blur bg-white/50 rounded-xl">
          <div className="container">
            <h4 className="text-center">Contact me</h4>
            <p className="text-center"> 
                <strong>I'd love to hear your feedback!</strong>
               </p>
            <form
              target="_blank"
              action="https://formsubmit.co/fe9ea3ae6955853958fe6d8c06c8cf22"
              method="POST"
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col my-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-xl"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col my-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-xl"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-control rounded-xl"
                  name="message"
                  rows="8"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="btn btn-lg btn-dark btn-block my-4"
              >
                Submit Form
              </button>
            </form>
          </div>
        </Col>
    </Container>
  );
}