import { useState, useEffect } from "react";

export const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch("https://it-solutions-1.onrender.com/api/data/service");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setServices(data);
                console.log("Services data:", data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
                </div>
                <div className="grid grid-three-cols">
                    { 
                        services && services.map((curElem, index) => {
                            const { provider, price, service, description } = curElem;
                            return (
                                <div className="card" key={index}>
                                    <div className="card-img">
                                        <img src="/images/design.png" alt="Our Service" />
                                    </div>
                                    <div className="card-details">
                                        <div className="grid grid-two-cols">
                                            <p>{provider}</p>
                                            <p>{price}</p>
                                        </div>
                                        <h2>{service}</h2>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        </section>
    );
};
