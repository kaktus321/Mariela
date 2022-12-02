import React from 'react'
import './styles/About.scss'
import beginnings from './img/beginnings.png'
import carrer from './img/carrer.png'
import products from './img/products.png'

const About = () => {
  return (
    <div className='Wrapper'>
    <div className='WrapperAbout'>
        <section className='beginnings'>
            <div className="text">
                <span>beginnings</span>
                <p>
                Credibly innovate granular internal or organic <br/>
                sources whereas high standards in web-readiness. <br/>
                Energistically scale future-proof core competencies <br/>
                vis-a-vis impactful experiences.
                <br/>
                <br/>
                Dramatically synthesize integrated schemas. <br/>
                with optimal networks.
                </p>
            </div>
            <img src={beginnings} alt="" />
        </section>
        <div className='line'></div>
        <section className='carrer'>
            <img src={carrer} alt="" />
            <div className="text">
                <span className='carrerText' >carrer</span>
                <p className='carrerText'>
                Collaboratively administrate turnkey channels <br/>
                 whereas virtual e-tailers.
                <br/>
                <br/>
                Objectively seize scalable metrics whereas <br/>
                proactive e-services seamlessly empower fully <br/>
                researched growth strategies.
                <br/>
                <br/>
                And interoperable internal or “organic” sources.
                </p>
                <a className='learnMore' href="#">
                    Learn more
                </a>
            </div>
        </section>
        <div className='line'></div>
        <section className='products'>
            <div className="text">
                <span>products</span>
                <p>
                Seamlessly empower fully researched growth <br/>
                strategies and interoperable internal or “organic” <br/>
                sources.
                <br/>
                <br/>
                Credibly innovate granular internal or “organic” <br/>
                sources whereas high standards in web-readiness.
                <br/>
                <br/>
                Energistically scale future-proof core competence
                </p>
            </div>
            <img src={products} alt="" />
        </section>
        </div>
    </div>
  )
}

export default About