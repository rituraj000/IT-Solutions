import Analytics from '../components/Analytics';

export const Home =() =>{
    return ( <>
    <main>
                  {/* 1st Section */}

   <section className="section-hero">
    <div className="container grid grid-two-cols"> 
     <div className="hero-content">
   <p>We Are The Best IT Company</p>
    <h1> Welcome </h1>
    <p>
        Are You Ready To Take Your Business To The Next Level With Cutting-Edge IT-Solutions?
        Look No Further! At IT-Solution , We Specialize in Providing innovative IT-Services And Solutions
        Tailored To Look Your Unique Business Needs. 
    </p>
    <div className="btn btn-group">
    <a href="/Contact">
    <button className="btn">Connect Now</button>
    </a>
    
    <a href="/Service">
    <button className="btn secondary-btn" > Learn More</button></a>
    </div>
     </div>
       
       {/* Hero Image */}
        <div className="hero-image">
           <img src="images/home.png" alt="Hello" width="500" height="500" />
        </div>

    </div>
   </section>

    </main>

           {/* 2nd Section */}

    <Analytics/>
    
             {/* 3rd Section */}

             <section className="section-hero">
    <div className="container grid grid-two-cols"> 
        {/* Hero Image */}
        <div className="hero-image">
            <img src="images/hero.png" alt="Hello" width="500" height="500" />
        </div>

        <div className="hero-content">
            <p>We Are Here To Help You</p>
            <h1> Get Started Today </h1>
            <p>
                Ready to Take The First Step Toward A 06re Efficient And Sequre IT Infrasctructure? Contact As Today For A Free Consultation
                Abd Let's Discuss How We Can Help your Business Thrive In The Digital Age.
            </p>
            <div className="btn btn-group">
                <a href="/Contact">
                    <button className="btn">Connect Now</button>
                </a>
                <a href="/Service">
                    <button className="btn secondary-btn"> Learn More</button>
                </a>
            </div>
        </div>
    </div>
</section>
    
    </> )
}