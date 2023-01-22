import { useState, useEffect } from 'react' 
import { Link, useParams } from 'react-router-dom'
/* import { useParams } from 'react-router-dom' */
import { gFetch } from '../../utilities/fetchFalso'
/* import Itemlist from "../../ItemList/Itemlist" */



const ItemListContainer = ( {saludo} ) => {
const [productos, setProductos] = useState([])
const [cargando, setCargando] = useState(true)
const { categoriaID } = useParams()

  useEffect (() => {
    console.log(categoriaID)
    if (categoriaID) {
            gFetch() 
            .then(respuestaPromesa => {
              setProductos(respuestaPromesa.filter(items => items.categoria === categoriaID))
            })
            .catch(err => console.error(err))
            .finally(() => setCargando(false))

      } else {
 
            gFetch() 
            .then(respuestaPromesa => {
              setProductos(respuestaPromesa)
          })
            .catch(err => console.error(err))
            .finally(() => setCargando(false))
          }
    }, [categoriaID])

  return (
    <div style ={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}

      className="container">
      { cargando 
        ?
      
        <p>Aguarde, se están cargando los productos...</p>
      
        :
      
        productos.map (producto => <div key={producto.id} className ='m-1 card col-4 shadow'>
                                        <div className='card-head'>
                                          {producto.name}
                                        </div>
                                        <div className='card-body'>
                                          <img src={producto.foto} className = 'col-10'/>
                                          <h6>Categoría: {producto.categoria}</h6>
                                          <h6>Precio: ${producto.price}</h6>
                                        </div>
                                        <div className='card-footer'>
                                          <Link to= {`/detalle/${producto.id}`}>
                                            <button className='btn btn-danger w-100'> Detalle </button>
                                          </Link>
                                        </div>

                                   </div>
          )
      }
    </div>
  )
}

export default ItemListContainer