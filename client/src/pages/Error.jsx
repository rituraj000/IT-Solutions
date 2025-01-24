import { NavLink } from "react-router-dom"

export const Error = () =>{
    return(<>
    <section id="error-page">
    <div className="content">
        <h2 className="header">404</h2>
        <h4>Sorry! Page Not Found</h4>
        <p>
            Ooops! It Seems Like The Page You Ae Trying To Access dosen't exist.
            If You Believe Ther's An Issue , Feel Free To Report It,
            And We Will Look Into It.
        </p>
        <div className="btns">
            <NavLink to='/'>Return Home</NavLink>
            <NavLink to='/contact'>Report Problem</NavLink>
        </div>
    </div>

    </section>
    
    
    </>)
}