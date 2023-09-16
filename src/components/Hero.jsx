import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    return (
    <section className="hero bg-black">
      <div className="container">
        <h5>GROWING WITH DATA ANALYTICS</h5>
        <h1>Grow with data.</h1>
        <h2>Fast, flexible financing for 
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              ' BTB',
              800, // wait 1s before replacing "Mice" with "Hamsters"
              ' BTC',
              800,
              ' SAAS',
              800,
              ' D2C',
              800,
            ]}
            wrapper="span"
            speed={300}
            repeat={Infinity}
            omitDeletionAnimation={false}
          />
        </h2>
        <h4>Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms.</h4>
        <button className="btn green">Get Started</button>
      </div>
    </section>
    )
}

export default Hero