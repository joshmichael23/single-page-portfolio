import React from 'react'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
function footer() {
  const form = useRef();
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [validName, setValidName] = useState(true);


  function validateEmailAdd(email){
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function validateName(value){
    if(value==''){
      setValidName(false)
    }else{
      setValidName(true)
    }
  }

  function validateEmail(value){
    if(value==''){
      setValidEmail(false)
    }else if(!validateEmailAdd(value)){
      setValidEmail(false)
    }else{
      setValidEmail(true)
    }
  }

  function validateMessage(value){
    console.log(validMessage);
    if(value==''){
      setValidMessage(false);
    }else{
      setValidMessage(true);
    }
 
  }

  const sendEmail = (e) => {
    e.preventDefault(); 

    const name = form.current['from_name'].value;
    const email = form.current['from_email'].value;
    const message = form.current['message'].value;

    validateMessage(message);
    validateEmail(email);
    validateName(name);
    if (validEmail && validMessage && validName) {
      emailjs
        .sendForm('service_efzom5a', 'template_sqsx5ji', form.current, {
          publicKey: 'sEJ6COwXwgoM3I87T',
        })
        .then(
          () => {
            alert('Sent!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } 
  }


  return (
    <footer className='footer'>
        <div className='footer-top'>
            <h3>Contact</h3>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>

        <form ref={form} className='footer-form' onSubmit={sendEmail} autoComplete="off">
            <div className={validName?'':'err'}>
              <input type="text" placeholder='NAME' id="formname"   name="from_name"/>
              <span className='errorlogo'>!</span>
            </div>
            <div className={validEmail?'':'err'}>
              <input type="text" placeholder='EMAIL' id="formemail"  name="from_email"/>
              <span className='errorlogo'>!</span>
            </div>
            <label className={validEmail?'errorforEmail':'errorforEmail show'} htmlFor="formemail">Sorry, invalid format here</label>
            <textarea placeholder='MESSAGE' name="message" id="formmessage" className={validMessage?'':'err'} maxLength={150}></textarea>
            <button>SEND MESSAGE</button>
        </form>

        <div className='footer-bottom'> 
            <h2>josholea</h2>
            <div className='button-containers'>
              <a className='socialmedias' target="_blank" href="https://github.com/joshmichael23/"><img src="/icon-github.svg" alt="" /></a>
              <a className='socialmedias' target='_blank' href="https://www.frontendmentor.io/profile/joshmichael23"><img src="/icon-frontend-mentor.svg" alt="" /></a>
              <a className='socialmedias' target='_blank' href="https://www.linkedin.com/in/josh-michael-olea/"><img src="/icon-linkedin.svg" alt="" /></a>
              <a className='socialmedias' target='_blank' href="https://twitter.com/phxspammer"><img src="/icon-twitter.svg" alt="" /></a>
            </div>
        </div>
    </footer>
  )
}

export default footer