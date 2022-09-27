import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  logo  from "../assets/image/logo.gif"
import  linkedin  from "../assets/image/linkedin-icon.webp"
import  facebook  from "../assets/image/face-icon.webp"
import  github  from "../assets/image/git-icon.webp"
import  email  from "../assets/image/email-icon.webp"


export const NavBar = () => {
    const [linkAtivo, setLinkAtivo] = useState('home');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const Scroll = () => {
            if (window.scrollY > 50){
               setScroll(true);
            } else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", Scroll);
        return () => window.removeEventListener("scroll", Scroll)
    }, [])

    const onUpdateLinkAtivo = (value) => {
        setLinkAtivo(value);
    }

    return (
                <Navbar bg="light" expand="lg" className = {scroll ? "scroll": ""}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="Carregando" className='icon'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className='navbar-toggler-icon'></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className={linkAtivo === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLinkAtivo('home')}>Home</Nav.Link>
                                <Nav.Link href="#habilidades" className={linkAtivo === 'Habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLinkAtivo('habilidades')}>Habilidades</Nav.Link>
                                <Nav.Link href="#projetos" className={linkAtivo === 'projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLinkAtivo('projetos')}>Projetos</Nav.Link>
                            </Nav>
                            <span className='navbar-text'>
                                <div className='social-icon'>
                                   <a href="#"><img src={linkedin} alt="Carregando" className='icon' /></a>
                                   <a href="#"><img src={github} alt="Carregando"  className='icon'/></a>
                                   <a href="#"><img src={facebook} alt="Carregando"  className='icon'/></a>
                                   <a href="#"><img src={email} alt="Carregando" className='icon' /></a>
                                </div>
                                <button className="contato"
                                onClick={() => console.log('conectar')}>
                                    <span>Entre em Contato!</span>
                                </button>
                            </span>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    )
}