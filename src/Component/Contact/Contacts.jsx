
import "./Contact.css";
import ContactImage from "../../assets/contact/contact.jpg";

export default function Contacts() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_col">
              <div className="contact_image">
                <img src={ContactImage} alt="Contact" />
              </div>
            </div>
            <div className="contact_col">
              <h2>Contact US</h2>
              <form>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name..."
                    autoComplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone..."
                    autoComplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email..."
                    autoComplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <textarea placeholder="Write a Message..."></textarea>
                </div>
                <div className="btn_wrapper">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
