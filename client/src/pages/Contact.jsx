import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify'; // Ensure you have toast imported

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            console.log("User data available:", user); // Log user data
            setContact({
                username: user.username,
                email: user.email,
                message: "",
            });
        }
    }, [user]);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setContact({ ...contact, [name]: value });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                toast.success("Message Sent Successfully");
            } else {
                toast.error("Message Not Sent");
            }
        } catch (error) {
            toast.error("Message Not Sent");
            console.log(error);
        }
    }

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="we are ready to help" />
                    </div>

                    <div className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows={6}
                                    cols={30}
                                    name="message"
                                    placeholder="Your message"
                                    id="message"
                                    required
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit" className="btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};
