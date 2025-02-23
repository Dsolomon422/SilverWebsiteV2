import { Navbar, Container } from "react-bootstrap"
import logo from "../assets/img/SilverLogo.png"
import navlogo1 from "../assets/img/nav-icon1.svg"

export const NavBar = () => {
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/daniel-solomon-6310a11b1/"><img src={navlogo1} alt="LinkedIn"/></a>
                </div>
                <button onClick={() => window.open("https://form.typeform.com/to/VQ9lqaJt", "_blank")}  className="vvd">
                    <span>Let's Connect</span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}