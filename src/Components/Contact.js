import { useSelector } from "react-redux";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Contact = () => {
  const tog = useSelector((state) => {
    return state.Toggle;
  });
  return (
    <>
      <Nav />
      {tog && <Sidebar />}
      <div className="Contact1">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Contact;
