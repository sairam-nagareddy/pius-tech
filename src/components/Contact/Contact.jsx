import React, { useState, useRef } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '', bname: '', designation: '', amazonAcc: '', hear: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message, phone, bname, designation, amazonAcc, hear } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData)
  }

  const notify = () => toast('We will reach out to you soon!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  })

  // const handleSubmit = () => {
  //   setLoading(true);
  //   console.log("HI")
  //   const subject = `New message from ${name} (${email})`;
  //   const body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
  //   const mailtoLink = `mailto:sairam.reddy@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  //   console.log("mailToLink", mailtoLink)
  //   window.location.href = mailtoLink;
  //   setLoading(false)
  //   setIsFormSubmitted(true);
  // }

  const form = useRef()

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nkk845r",
      "template_m7xz3w8",
      form.current,
      "ueY5DKVGZpqFRqCo5"
    ).then(
      (result) => {
        console.log(result.text)
        setFormData({ name: '', email: '', message: '', phone: '', bname: '', designation: '', amazonAcc: '', hear: '' })
        setIsFormSubmitted(true)
        notify()
      }, (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <>
      <Navbar />
      <div className={styles.contactContainer} id="contact">
        <ToastContainer />
        <h2 className={styles.contactTitle}>Contact Us</h2>

        {!isFormSubmitted ? (
          <form ref={form} onSubmit={sendMail} id="form">
            <div className={styles.formContainer}>
              <div className={styles.nameInput}>
                <input required className={styles.inputText} placeholder='Name' name='name' value={name} onChange={handleInputChange} type="text" />
              </div>
              <div className={styles.emailInput}>
                <input required className={styles.inputText} placeholder='Email' name='email' value={email} onChange={handleInputChange} type="email" />
              </div>
              <div className={styles.nameInput}>
                <input required className={styles.inputText} placeholder='Phone' name='phone' value={phone} onChange={handleInputChange} type="tel" />
              </div>
              <div className={styles.nameInput}>
                <input required className={styles.inputText} placeholder='Business Name' name='bname' value={bname} onChange={handleInputChange} type="text" />
              </div>
              <div className={styles.nameInput}>
                <input required className={styles.inputText} placeholder='Designation' name='designation' value={designation} onChange={handleInputChange} type="text" />
              </div>
              <div className={styles.nameInput}>
                <input required className={styles.inputText} placeholder='Where did you hear about us?' name='hear' value={hear} onChange={handleInputChange} type="text" />
              </div>
              <div className={styles.nameInput}>
                <input required className={styles.inputText} placeholder='Do you have an amazon or similar account registered already?' name='amazonAcc' value={amazonAcc} onChange={handleInputChange} type="text" />
              </div>
              <div className={styles.messageInput}>
                <textarea required className={styles.inputText + ` ${styles.textArea}`} placeholder='How can we help?' value={message} name="message" onChange={handleInputChange}></textarea>
              </div>
              <button type="submit" className={styles.meetingBtn}>
                <div className={styles.buttonInnerText}>
                  <div>Send Message</div>
                  <div style={{ position: 'relative', top: '20px' }}>Send Message</div>
                </div>
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>
            <h3 className='commonText'>Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Contact