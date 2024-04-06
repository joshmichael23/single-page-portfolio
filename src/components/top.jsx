import React from 'react'

const top = ({handleScroll}) => {
  return (
    <div className='top'>
        <div className='hero-background'>
          <div className="hero">
            <p>josholea</p>
            <div className='button-containers'>
              <a className='socialmedias' target="_blank" href="https://github.com/joshmichael23/"><img src="/icon-github.svg" alt="" /></a>
              <a className='socialmedias' target='_blank' href="https://www.frontendmentor.io/profile/joshmichael23"><img src="/icon-frontend-mentor.svg" alt="" /></a>
              <a className='socialmedias' target='_blank' href="https://www.linkedin.com/in/josh-michael-olea/"><img src="/icon-linkedin.svg" alt="" /></a>
              <a className='socialmedias' target='_blank' href="https://twitter.com/phxspammer"><img src="/icon-twitter.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className='contactme'>
          <h1>Nice to <span className="name-intro">meet you! I'm</span> <span className="name">Josh Olea</span>.</h1>
          <p>Based in PH, I'm a front-end developer passionate about building accessible web apps that users love.</p>
          <button onClick={handleScroll}>Contact me</button>
        </div>
    </div>
  )
}

export default top