import React, { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message, phone, bname, designation, amazonAcc, hear } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData)
  }

  const handleSubmit = () => {
    setLoading(true);
    console.log("HI")
    const subject = `New message from ${name} (${email})`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:sairam.reddy@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log("mailToLink", mailtoLink)
    window.location.href = mailtoLink;
    setLoading(false)
    setIsFormSubmitted(true);
  }

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>

      {!isFormSubmitted ? (
        <div className={styles.formContainer}>
          <div className={styles.nameInput}>
            <input className={styles.inputText} placeholder='Name' name='name' value={name} onChange={handleInputChange} type="text" />
          </div>
          <div className={styles.emailInput}>
            <input className={styles.inputText} placeholder='Email' name='email' value={email} onChange={handleInputChange} type="email" />
          </div>
          <div className={styles.nameInput}>
            <input className={styles.inputText} placeholder='Phone' name='phone' value={phone} onChange={handleInputChange} type="tel" />
          </div>
          <div className={styles.nameInput}>
            <input className={styles.inputText} placeholder='Business Name' name='bname' value={bname} onChange={handleInputChange} type="text" />
          </div>
          <div className={styles.nameInput}>
            <input className={styles.inputText} placeholder='Designation' name='designation' value={designation} onChange={handleInputChange} type="text" />
          </div>
          <div className={styles.nameInput}>
            <input className={styles.inputText} placeholder='Where did you hear about us?' name='hear' value={hear} onChange={handleInputChange} type="text" />
          </div>
          <div className={styles.nameInput}>
            <input className={styles.inputText} placeholder='Do you have an amazon or similar account registered already?' name='amazonAcc' value={amazonAcc} onChange={handleInputChange} type="text" />
          </div>
          <div className={styles.messageInput}>
            <textarea className={styles.inputText + ` ${styles.textArea}`} placeholder='How can we help?' value={message} name="message" onChange={handleInputChange}></textarea>
          </div>
          {/* <label>Do you have an amazon or similar account registered already?</label> */}
          {/* <div className={styles.radioInput}>
            <div className={styles.radioBtn}>
              <input name="Yes" type='radio' value='Yes'></input>
              <label for="Yes">Yes</label>
            </div>
            <div>
              <input name="No" type='radio' value='No'></input>
              <label for="No">No</label>
            </div>
          </div> */}
          <div className={styles.sendMessageBtn}>
            <div className={styles.buttonInnerText}>
              <div>Get in touch</div>
              <div style={{ position: 'relative', top: '10px' }}>Get in touch</div>
            </div>
          </div>
      </div>
      ): (
        <div className={styles.thankYouMessage}>
          <h3 className='commonText'>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  )
}

export default Contact