import { useState } from "react";
const URL = "https://it-solutions-1.onrender.com/api/auth/login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // We Have To Write navigate after export always
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("LogIn Form ", response);

            const res_data = await response.json();
            if (response.ok) {
                toast.success("LogIn Successful");

                // Store It In Local Storage
                storeTokenInLS(res_data.token);

                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Login Failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="images/login.png" alt="Log In" width="500" height="500" />
                            </div>
                            {/* LogIn form  */}
                            <div className="registration-form">
                                <h1 className="main-heading md-3"> Login Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email"> email</label>
                                        <input type="text" name="email" placeholder="Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="password"> Password</label>
                                        <input type="password" name="password" placeholder="Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit"> Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};
