import React from 'react'

function projects({handleScroll}) {
  return (
    <div className='project'>
        <div className='project-header'>
        <h2>Projects</h2>
        <button onClick={handleScroll}>CONTACT ME</button>
        </div>
        
        <div className='project-container'>
            <img src="/first.webp" alt="" />
            <h3 >ROOM HOMEPAGE</h3>
            <div className='skills-used'>
                <p>HTML</p>
                <p>VITE</p>
                <p>REACT</p>
                <p>SASS</p>
            </div>
            <div className='buttons'>
                <a className='view' target='_blank' href="https://roomhomepage-jade.vercel.app">VIEW PROJECT</a>
                <a className='view' target='_blank' href="https://github.com/joshmichael23/roomhomepage">VIEW CODE</a>
            </div>
        </div>

        <div className='project-container'>
            <img src="/second.webp" alt="" />
            <h3>CALCULATOR</h3>
            <div className='skills-used'>
                <p>HTML</p>
                <p>VITE</p>
                <p>REACT</p>
                <p>CSS</p>
            </div>
            <div className='buttons'>
                <a className='view' href="https://calculator-hazel-rho.vercel.app" target='_blank'>VIEW PROJECT</a>
                <a className='view' href="https://github.com/joshmichael23/calculator" target='_blank'>VIEW CODE</a>
            </div>
        </div>

        <div className='project-container'>
            <img src="/third.webp" alt="" />
            <h3 >E-COMMERCE APP</h3>
            <div className='skills-used'>
                <p>HTML</p>
                <p>CSS</p>
                <p>NEXT.JS</p>
            </div>
            <div className='buttons'>
                <a className='view' target='_blank' href="https://ecomm-psi-seven.vercel.app">VIEW PROJECT</a>
                <a className='view' target='_blank' href="https://github.com/joshmichael23/ecomm">VIEW CODE</a>
            </div>
        </div>

        <div className='project-container'>
            <img src="/fourth.webp" alt="" />
            <h3>TIP CALCULATOR</h3>
            <div className='skills-used'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>JQUERY</p>
            </div>
            <div className='buttons'>
                <a className='view' target="_blank" href="https://tip-calculator-app-main-umber-alpha.vercel.app">VIEW PROJECT</a>
                <a className='view' target="_blank" href="https://github.com/joshmichael23/tip-calculator-app-main">VIEW CODE</a>
            </div>
        </div>

        <div className='project-container'>
            <img src="/fifth.webp" alt="" />
            <h3 >ADVICE GENERATOR</h3>
            <div className='skills-used'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>JQUERY</p>
            </div>
            <div className='buttons'>
                <a className='view' target="_blank" href="https://advice-generator-app-main-seven-theta.vercel.app">VIEW PROJECT</a>
                <a className='view' target="_blank" href="https://github.com/joshmichael23/advice-generator-app-main">VIEW CODE</a>
            </div>
        </div>

        
        <div className='project-container'>
            <img src="/sixth.webp" alt="" />
            <h3 >INTERACTIVE RATING</h3>
            <div className='skills-used'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>JQUERY</p>
            </div>
            <div className='buttons'>
                <a className='view' target='_blank' href="https://interactive-rating-component-main-ten-livid.vercel.app">VIEW PROJECT</a>
                <a className='view' target='_blank' href="https://github.com/joshmichael23/interactive-rating-component-main">VIEW CODE</a>
            </div>
        </div>
    </div>
  )
}

export default projects