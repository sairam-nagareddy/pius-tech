import React, { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
    console.log(formData)
  }

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: 'contact',
    //   name: name,
    //   email: email,
    //   message: message
    // }
    console.log("HI")
    const subject = `New message from ${name} (${email})`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:sairam.reddy@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log("mailToLink", mailtoLink)
    window.location.href = mailtoLink;
    setLoading(false)
    setIsFormSubmitted(true);

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
  }

  return (
    <div className={styles.contactContainer}>
      <h2 className='titleText'>Contact Us</h2>
      {/* <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:sairam.reddy@live.com" className='p-text'>sairam.reddy@live.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 8179265617" className='p-text'>+91 8179265617</a>
        </div>
      </div> */}

      {!isFormSubmitted ? (
      <div className={styles.formContainer}>
        <div className={styles.nameInput}>
          <input className={styles.inputText} placeholder='Name' name='name' value={name} onChange={handleInputChange} type="text" />
        </div>
        <div className={styles.emailInput}>
          <input className={styles.inputText} placeholder='Email' name='email' value={email} onChange={handleInputChange} type="email" />
        </div>
        <div className={styles.messageInput}>
          <textarea className={styles.inputText + ` ${styles.textArea}`} placeholder='Message' value={message} name="message" onChange={handleInputChange}></textarea>
        </div>
        <div className={styles.buttonDiv}>
          <button type='button' className={styles.sendMessageBtn} onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        
      </div>
      ): (
        <div>
          <h3 className='commonText'>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  )
}

export default Contact