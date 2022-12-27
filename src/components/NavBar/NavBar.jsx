import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
      <>
          <ul>
              <li><a href = "">Store del Club Nacional de Football   </a></li>
              <li><a href = "">Entrenamiento   </a></li>
              <li><a href = "">Casual         </a></li>
              <li><a href = "">Accesorio      </a></li>
              <li><a href = "">Niños          </a></li>
              <CartWidget />

          </ul>
      </>
    )
  }
  
  export default NavBar