function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-intro">
          <p className="section-tag">GET IN TOUCH</p>

          <h1>Contact Us</h1>

          <p>
            Have a question about an Indian sports bike? Send us a message and
            our team will get back to you.
          </p>

          <div className="contact-info">
            <div>
              <strong>Email</strong>
              <span>info@indianbikes.com</span>
            </div>

            <div>
              <strong>Phone</strong>
              <span>+91 98765 43210</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          <div className="social-links">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>YouTube</span>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="6" placeholder="Write your message"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
