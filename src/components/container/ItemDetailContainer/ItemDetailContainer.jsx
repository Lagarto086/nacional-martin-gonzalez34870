import { useState, useEffect } from 'react' 
import { Link, useParams } from "react-router-dom"
import { gFetch } from '../../utilities/fetchFalso'



 
 
 const ItemDetailContainer = ()=> {
  const [productos, setProductos] = useState([])
  const { detalleID } = useParams()
  
    useEffect (() => {
      console.log(detalleID)
      if (detalleID) {
              gFetch() 
              .then(respuestaPromesa => {
                setProductos(respuestaPromesa.filter(items => items.id === detalleID))
              })
              .catch(err => console.error(err))
        } 
      }, [detalleID])
  
    return (
      <div style ={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
      }}
  
        className="">
            
         { productos.map (producto => <div key={producto.id} className ='row'>
                                          
                                          <div className='col-6'>
                                            <img src={producto.foto} className = 'col-12'/>
                                          </div>


                                          <div className='col-6'>
                                            <div className='tituloEnDetalle'>
                                              {producto.name}
                                            </div>
                                              <h6 className='descripcionProducto'>Categoría: {producto.categoria}</h6>
                                              <h6 className='descripcionProducto'>Precio: ${producto.price}</h6>
                                            <div className=''>
                                              <Link to= {`/carrito`}>
                                                <button className='botonAgregar btn btn-danger w-90'> Agregar al carrito </button>
                                              </Link>
                                            </div>
                                          </div>
  
                                     </div>
            )
    }
      </div>
    )
  }

export default ItemDetailContainer