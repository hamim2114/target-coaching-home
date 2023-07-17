import './ContactPage.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactPage = () => {

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <h1>Get In Touch <span>With us</span> </h1>
        <div className="contact-main">
          <div className="left">
            {/* <h1>Get In Touch With us</h1> */}
            {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p> */}
            <div className="contact">
              <div className="contact-sec">
                <div className="icon"><IoLocationSharp /></div>
                <div className="address">
                  <h3>Address</h3>
                  <p>East Side of Rajar Math, Bandorban, Bangladesh</p>
                </div>
              </div>
              <div className="contact-sec">
                <div className="icon"><BsFillTelephoneFill size={24} /></div>
                <div className="address">
                  <h3>Phone</h3>
                  <p>01839420283</p>
                  <p>01839420283</p>
                </div>
              </div>
              <div className="contact-sec">
                <div className="icon"><MdEmail size={29} /></div>
                <div className="address">
                  <h3>Email</h3>
                  <p>targetcoaching@gmail.com</p>
                  <p>targetcoaching@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <form >
              <input name='name' type="text" className="name" placeholder='Name*' required />
              <div className="phn-email">
                <input name='phone' type="text" className="phone" placeholder='Phone*' required />
                <input name='email' type="text" className="email" placeholder='Email' required />
              </div>
              <input name="subject" required placeholder='Subject*' />
              <textarea name="message" cols="30" rows="10" required placeholder='Description*'></textarea>
              <button type="submit">Submit Now</button>
            </form>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.0653025097715!2d92.21966262797038!3d22.197142346115786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6a21a11e7be7%3A0x1b7e96c2d8a22f8b!2sEDUCATION%20WEB%2B!5e0!3m2!1sen!2sbd!4v1689605616084!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactPage