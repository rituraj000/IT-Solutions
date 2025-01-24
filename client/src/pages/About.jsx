import { Analytics } from "../components/Analytics";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
    const { user } = useAuth();

    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols"> 
                        <div className="hero-content">
                            <p>WELCOME, {user.username ? `${user.username} To Our WebSite!` : `To Our WebSite!`}</p>
                            <h1>Why Choose Us?</h1>
                            <p>
                                Expertise: Our Team Consists Of Experienced IT Professionals Who Are Passionate About Staying Up-To-Date With The Latest Industry Trends.
                                <br />
                                <br />
                                Customization: We Understand That Every Business Is Unique. That's Why We Create Solutions That Are Tailored To Your Specific Needs And Goals.
                                <br />
                                <br />
                                Customer-Centric Approach: We Prioritize Your Satisfaction and Provide Top-Notch Support To Address Your IT Concerns.
                                <br />
                                <br />
                                Affordability: We Offer Competitive Pricing Without Compromising On The Quality Of Our Services.
                                <br />
                                <br /> 
                                Reliability: Count On Us To Be There When You Need Us. We Are Committed To Ensuring Your IT Environment Is Reliable And Available 24/7.  
                            </p>
                            <div className="btn btn-group">
                                <NavLink to="/Contact">
                                    <button className="btn">Connect Now</button>
                                </NavLink>
                                <NavLink to="/Service">
                                    <button className="btn secondary-btn">Learn More</button>
                                </NavLink>
                            </div>
                        </div>
                       
                        {/* Hero Image */}
                        <div className="hero-image">
                            <img src="images/about.png" alt="Hello" width="500" height="500" />
                        </div>
                    </div>
                </section>
            </main>
            <Analytics />
        </>
    );
};
