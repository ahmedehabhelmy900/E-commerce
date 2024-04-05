import "../sass/contact.scss";
function Contact() {
  return (
    <div className="container">
      <form>
        <div className="right">
          <input type="text" required placeholder="Your Name" />
          <input type="tel" required placeholder="Your Phone" />
          <input type="email" required placeholder="Your Email" />
          <input type="text" required placeholder="The Subject" />
        </div>
        <div className="left">
          <textarea required placeholder="Message"></textarea>
          <input type="submit" value="Send" className="submit" />
        </div>
      </form>
    </div>
  );
}
export default Contact;
