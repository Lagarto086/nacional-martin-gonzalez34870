import CartWidget from "../CartWidget/CartWidget"
import { Navbar, Container, Nav} from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <NavLink to='/'>Tienda del Club Nacional de Football</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className={({ isActive })=> isActive ? 'btn btn-success' : 'btn btn-dark'} to="/categoria/camisetas">Camisetas</NavLink>
                    <NavLink className={({ isActive })=> isActive ? 'btn btn-success' : 'btn btn-dark'} to="/categoria/accesorios">Accesorios</NavLink>
                </Nav>
                <Nav>
                    <Link to='/carrito' > <CartWidget /> </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        

      </>
    )
  }
  
  export default NavBar